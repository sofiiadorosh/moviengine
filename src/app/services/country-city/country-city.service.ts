import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { City } from "@models/city.interface";
import { Country } from "@models/country.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CountryCityService {

  constructor(private httpClient: HttpClient) { }

  private getOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders({
      "X-CSCAPI-KEY": environment.countryCityApiKey
    });
    return { headers };
  }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${environment.countryCityApiBaseUrl}/countries`,
      this.getOptions()
    );
  }

  getCitiesByCountry(iso: string): Observable<City[]> {
    return this.httpClient.get<City[]>(`${environment.countryCityApiBaseUrl}/countries/${iso}/cities`,
      this.getOptions()
    );
  }
}
