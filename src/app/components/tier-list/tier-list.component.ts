import { Component, OnInit } from '@angular/core';

interface Tier {
  label: string;
  color: string;
  id: string;
}

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.scss'],
})
export class TierListComponent implements OnInit {
  tiers: Tier[] = [
    { label: 'S', color: '#e74c3c', id: 'tier-S' },
    { label: 'A', color: '#e67e22', id: 'tier-A' },
    { label: 'B', color: '#f1c40f', id: 'tier-B' },
    { label: 'C', color: '#3498db', id: 'tier-C' },
    { label: 'D', color: '#95a5a6', id: 'tier-D' },
    { label: '?', color: '#7f8c8d', id: 'tier-unassigned' },
  ];

  // Gry przykładowe – w prawdziwej aplikacji możesz je wczytywać dynamicznie
  tierGames: { [key: string]: Array<{ name: string; image: string }> } = {};

  ngOnInit(): void {
    for (const tier of this.tiers) {
      this.tierGames[tier.label] = []; // Możesz zapełnić danymi z API
    }

    // Przykładowe dane
    this.tierGames['S'].push({
      name: 'Gloomhaven',
      image: 'https://via.placeholder.com/100?text=Gloomhaven',
    });
  }

  saveTierList(): void {
    console.log('Zapisano tier listę:', this.tierGames);
  }
}
