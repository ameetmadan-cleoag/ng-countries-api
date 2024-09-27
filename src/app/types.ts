export type Country = {
    name: {
      common: string
      official: string
      nativeName: {
        [key: string]: {
          official: string
          common: string
        }
      }
    }
    tld: Array<string>
    cca2: string
    ccn3: string
    cca3: string
    independent: boolean
    status: string
    unMember: boolean
    currencies: {
      [key: string]: {
        name: string
        symbol: string
      }
    }
    idd: {
      root: string
      suffixes: Array<string>
    }
    capital: Array<string>
    altSpellings: Array<string>
    region: string
    languages: {
      [key: string]: string
    }
    latlng: Array<number>
    landlocked: boolean
    area: number
    demonyms: {
      [key: string]: {
        f: string
        m: string
      }
    }
    flag: string
    maps: {
      googleMaps: string
      openStreetMaps: string
    }
    population: number
    car: {
      signs: Array<string>
      side: string
    }
    timezones: Array<string>
    continents: Array<string>
    flags: {
      png: string
      svg: string
    }
    coatOfArms: {}
    startOfWeek: string
    capitalInfo: {
      latlng: Array<number>
    }
};