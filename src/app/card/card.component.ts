import { Component, Input } from '@angular/core';
import { Country } from '../types';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() country!: Country;

  currencyKey!: string;
  currencySymbol!: string;
  currencyName!: string;
  languages!: string;
  population!: string;

  ngOnChanges() {
    if (!this.country) {
      return;
    }

    if (this.country.population) {
      this.population = new Intl.NumberFormat('de-CH').format(Number(this.country.population));
    }

    if (this.country && this.country.currencies) {
      this.currencyKey = Object.keys(this.country.currencies)[0];
      this.currencyName = this.country.currencies[this.currencyKey].name;
      this.currencySymbol = this.country.currencies[this.currencyKey].symbol;
    }    
    
    if (this.country && this.country.languages) {
      this.languages = Object.values(this.country.languages).join(', ');
    }
  }
}
