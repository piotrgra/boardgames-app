import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss'],
  imports: [FormsModule],
})
export class AddGameComponent {
  bggId: number | null = null;
  gamePreview: any = null;

  addGame() {
    if (this.bggId) {
      // tutaj można dodać zapytanie do API lub Firebase
      console.log(`Dodaję grę z BGG ID: ${this.bggId}`);
      // przykład podglądu
      this.gamePreview = {
        id: this.bggId,
        name: 'Przykładowa Gra',
        image: 'https://via.placeholder.com/100',
      };
    }
  }
}
