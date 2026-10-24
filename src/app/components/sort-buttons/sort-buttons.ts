import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sort-buttons',
  styleUrl: './sort-buttons.css',
  templateUrl: './sort-buttons.html',
})
export class SortButtons {
  // Envoie le tri choisi au composant parent ('' = pas de tri)
  @Output() sortChange = new EventEmitter<string>();

  active = '';

  sort(sortBy: string) {
    // Un deuxième clic sur le même bouton annule le tri
    this.active = this.active === sortBy ? '' : sortBy;
    this.sortChange.emit(this.active);
  }

  // Désactive le tri
  reset() {
    this.active = '';
    this.sortChange.emit('');
  }
}
