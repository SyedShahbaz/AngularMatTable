import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  private readonly apiUrl: string;
  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.apiUrl = baseUrl;
  }

  get(): Observable<string> {
      return this.httpClient.get<string>(`${this.apiUrl}weatherforecast`)
  }

  homeStatus(): Observable<string> {
    return this.httpClient.get<string>(`${this.apiUrl}home`)
  }

}
