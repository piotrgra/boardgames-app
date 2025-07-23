import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games: Array<{ name: string; image: string }> = [];

  ngOnInit(): void {
    this.games = [
      { name: 'Terraforming Mars', image: 'https://via.placeholder.com/100?text=TM' },
      { name: 'Catan', image: 'https://via.placeholder.com/100?text=Catan' },
    ];
  }

  removeGame(index: any): void {
    this.games.splice(index, 1);
  }
}
