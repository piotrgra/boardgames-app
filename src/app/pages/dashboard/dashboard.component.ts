import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { AddGameComponent } from '../../components/add-game/add-game.component';
import { GameListComponent } from '../../components/game-list/game-list.component';
import { TierListComponent } from '../../components/tier-list/tier-list.component';
import { GameService } from '../../services/game.service';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, AddGameComponent, GameListComponent, TierListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private readonly gameService = inject(GameService);

  games = toSignal(this.gameService.getGames(), {
    initialValue: [],
  });
}
