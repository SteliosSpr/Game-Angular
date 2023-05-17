import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dataArray } from '../results'


@Injectable({
  providedIn: 'root'
})
export class GameSearchServiceService {
  
  private BASE_URL: string = 'https://api.rawg.io/api/';
  private API_KEY: string = '9b4645666168450c913b26da92eee28b';

  constructor(private http: HttpClient) { }

  getGameSearch (gameName: string): Observable<dataArray> {
    const url: string = `${this.BASE_URL}games?key=${this.API_KEY}&search=${gameName}&page_size=9`;
    return this.http.get<dataArray>(url);
  }

}
