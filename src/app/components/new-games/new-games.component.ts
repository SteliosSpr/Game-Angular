import { Component, OnInit } from '@angular/core';
import { NewGameServiceService } from '../../services/new-game-service.service';
import { dataArray, result } from '../../results'

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.css']
})
export class NewGamesComponent implements OnInit {
  newGames: result [] = [];

  constructor(private newService: NewGameServiceService) {}

  ngOnInit(): void {
    this.newService.getNewGames().subscribe((res) => (this.newGames = res.results));
  }

}
