import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [NgFor, NgIf],
  selector: 'app-favorites',
  styleUrl: './favorites.css',
  templateUrl: './favorites.html',
})
export class Favorites {
  // Liste des favoris, reçue du composant parent
  @Input() favorites: Auto[] = [];

  // Demande au parent de retirer une voiture des favoris
  @Output() removeFavorite = new EventEmitter<Auto>();

  remove(auto: Auto) {
    this.removeFavorite.emit(auto);
  }
}
