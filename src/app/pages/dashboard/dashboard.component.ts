import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  imports: [],
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
