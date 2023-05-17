import { Component, Input, OnInit } from '@angular/core';
import { GameSearchServiceService } from '../../services/game-search-service.service'
import { ActivatedRoute } from '@angular/router';
import { dataArray, result } from '../../results'


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  gameResults: result [] = [];

  constructor(
    private searchService: GameSearchServiceService, 
    private route: ActivatedRoute) {}
  

  ngOnInit(): void {
    const gameName = this.route.snapshot.params['searchText'];
    this.searchService.getGameSearch(gameName).subscribe((res: dataArray) => {
      this.gameResults = res.results;
    });
  }


}
