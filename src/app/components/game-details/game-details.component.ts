import { Component, OnInit, Input } from '@angular/core';
import { GameDetailsServiceService } from '../../services/game-details-service.service'
import { GameScreenshotsServiceService } from '../../services/game-screenshots-service.service'
import { ActivatedRoute } from '@angular/router';
import { gameDetail } from '../../gameDetails';
import { ScreenshotArray, results } from '../../gameScreenshots';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  @Input() game!: gameDetail;
  @Input() screenshots!: results[];

  constructor(private detailService: GameDetailsServiceService, private screenshotService: GameScreenshotsServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const gameId = this.route.snapshot.params['id'];
    this.detailService.getGameDetails(gameId).subscribe((res: gameDetail) => (this.game = res));
    this.screenshotService.getGameScreenshots(gameId).subscribe((result: ScreenshotArray) => (this.screenshots = result.results));
  }
  
  changeSlide(index: number) {
    const carouselElement: HTMLElement | null = document.getElementById('carouselScreenshots');
    if (carouselElement) {
      carouselElement.setAttribute('data-slide-to', index.toString());
      carouselElement.classList.add('slide');
    }
  }

}
