import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScreenshotArray } from '../gameScreenshots';

@Injectable({
  providedIn: 'root'
})
export class GameScreenshotsServiceService {

  private BASE_URL: string = 'https://api.rawg.io/api/';
  private API_KEY: string = '9b4645666168450c913b26da92eee28b';

  constructor(private http: HttpClient) { }

  getGameScreenshots (gameId: string): Observable<ScreenshotArray> {
    const url: string = `${this.BASE_URL}games/${gameId}/screenshots?key=${this.API_KEY}`;
    return this.http.get<ScreenshotArray>(url);
  }
}
