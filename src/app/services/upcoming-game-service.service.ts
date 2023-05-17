import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dataArray } from '../results'

@Injectable({
  providedIn: 'root'
})
export class UpcomingGameServiceService {
  private currentDate: string = new Date().toISOString().split('T')[0];
  private nextYear: string = new Date(new Date().getFullYear() + 1, 0, 1).toISOString().split('T')[0];
  private BASE_URL: string = 'https://api.rawg.io/api/';
  private API_KEY: string = '9b4645666168450c913b26da92eee28b';
  private url: string = `${this.BASE_URL}games?key=${this.API_KEY}&dates=${this.currentDate},${this.nextYear}&ordering=-added&page_size=10`;

  constructor(private http: HttpClient) { }
  ngOnInit() {}

  getUpcomingGames (): Observable<dataArray> {
    return this.http.get<dataArray>(this.url);
  }

}
