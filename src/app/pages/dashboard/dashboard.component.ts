import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { AddGameComponent } from '../../components/add-game/add-game.component';
import { GameListComponent } from '../../components/game-list/game-list.component';
import { TierListComponent } from '../../components/tier-list/tier-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, AddGameComponent, GameListComponent, TierListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private readonly firestore: Firestore;
  games: any[] = [];

  constructor() {
    this.firestore = inject(Firestore);
  }

  async loadGames() {
    const ref = collection(this.firestore, 'games');
    const snapshot = await getDocs(ref);
    this.games = snapshot.docs.map((doc) => doc.data());
    console.log(this.games);
  }
}
