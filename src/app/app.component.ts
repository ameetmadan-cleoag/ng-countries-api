import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Country } from './types';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  @Input() countries!: Country[];
  ngOnInit() {
    this.http.get<Country[]>('https://restcountries.com/v3.1/all').subscribe(data => {
      this.countries = data;
    });
  }
}
