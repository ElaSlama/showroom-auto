import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-price-filter',
  styleUrl: './price-filter.css',
  templateUrl: './price-filter.html',
})
export class PriceFilter {
  // Envoie le prix maximum au composant parent (null = pas de filtre)
  @Output() maxPriceChange = new EventEmitter<number | null>();

  // Texte affiché dans le champ (vidé par reset)
  maxPrice = '';

  updatePrice(value: string) {
    this.maxPrice = value;
    this.maxPriceChange.emit(value ? Number(value) : null);
  }

  // Vide le champ et annule le filtre de prix
  reset() {
    this.updatePrice('');
  }
}
