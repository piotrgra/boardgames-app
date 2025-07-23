import { Component, Input, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Game } from '../../types/types';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  imports: [NgOptimizedImage],
})
export class GameListComponent implements OnInit {
  @Input()
  games: Game[] = [];

  ngOnInit(): void {}

  removeGame(index: any): void {
    this.games.splice(index, 1);
  }
}
