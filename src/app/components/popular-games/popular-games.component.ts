import { Component, OnInit } from '@angular/core';
import { PopularGameServiceService } from '../../services/popular-game-service.service';
import { dataArray, result } from '../../results'

@Component({
  selector: 'app-popular-games',
  templateUrl: './popular-games.component.html',
  styleUrls: ['./popular-games.component.css']
})
export class PopularGamesComponent implements OnInit {
  popularGames: result [] = [];

  constructor(private popularService: PopularGameServiceService) {}

  ngOnInit(): void {
    this.popularService.getPopularGames().subscribe((res) => (this.popularGames = res.results));
  }

}
