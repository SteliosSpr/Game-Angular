import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { gameDetail } from '../gameDetails';

@Injectable({
  providedIn: 'root'
})
export class GameDetailsServiceService {

  private BASE_URL: string = 'https://api.rawg.io/api/';
  private API_KEY: string = '9b4645666168450c913b26da92eee28b';

  constructor(private http: HttpClient) { }

  getGameDetails (gameId: string): Observable<gameDetail> {
    const url: string = `${this.BASE_URL}games/${gameId}?key=${this.API_KEY}`;
    return this.http.get<gameDetail>(url);
  }
}
