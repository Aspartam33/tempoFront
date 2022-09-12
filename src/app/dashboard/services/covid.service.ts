import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  covUrl = 'https://pomber.github.io/covid19/timeseries.json';

  constructor(private HttpClient: HttpClient) { }

  public getall(): Observable<any> {
    return this.HttpClient.get<any>(this.covUrl);
  }

  public fromcountry(country: string): Observable<any[]> {
    return this.getall().pipe(map(data => data[country]));
  }

  public twoDates(country: string, dateFrom: Date, dateTo: Date): Observable<any[]> {
    return this.fromcountry(country).pipe(map(res => res.filter(val => new Date(val.date) >= dateFrom && new Date(val.date) <= dateTo)));
  }
}
