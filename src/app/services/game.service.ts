import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';
import { Game } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private firestore: Firestore) {}

  getGames(): Observable<Game[]> {
    const ref = collection(this.firestore, 'games');
    return from(getDocs(ref)).pipe(
      map((snapshot) =>
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            gameId: Number(data['gameId']),
            name: String(data['name']),
            bggRating: Number(data['bggRating']),
            rank: Number(data['rank']),
            thumbnail: String(data['thumbnail']),
          };
        }),
      ),
    );
  }
}
