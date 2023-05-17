import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { UpcomingGamesComponent } from './components/upcoming-games/upcoming-games.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PopularGamesComponent } from './components/popular-games/popular-games.component';
import { NewGamesComponent } from './components/new-games/new-games.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { HomeComponent } from './components/home/home.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game/:id', component: GameDetailsComponent },
  { path: 'search_results/:searchText', component: SearchResultsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    SpinnerComponent,
    UpcomingGamesComponent,
    PopularGamesComponent,
    NewGamesComponent,
    GameDetailsComponent,
    HomeComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
