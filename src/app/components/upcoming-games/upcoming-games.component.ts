import { Component, OnInit } from '@angular/core';
import { UpcomingGameServiceService } from '../../services/upcoming-game-service.service';
import { dataArray, result } from '../../results'

@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.css']
})
export class UpcomingGamesComponent implements OnInit{
  upcomingGames: result [] = [];

  constructor(private upcomingService: UpcomingGameServiceService) {}

  ngOnInit(): void {
    this.upcomingService.getUpcomingGames().subscribe((res) => (this.upcomingGames = res.results));
  }

}
