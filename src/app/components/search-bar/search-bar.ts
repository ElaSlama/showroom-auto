import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Auto } from '../../interfaces/auto';
import { PriceFilter } from '../price-filter/price-filter';
import { SortButtons } from '../sort-buttons/sort-buttons';
import { ResultCount } from '../result-count/result-count';

@Component({
  imports: [NgFor, NgIf, PriceFilter, SortButtons, ResultCount],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar {
  // Liste des voitures reçue du composant parent (App)
  @Input() autos: Auto[] = [];

  // Liste des favoris reçue du composant parent (App)
  @Input() favorites: Auto[] = [];

  // Événement envoyé au composant parent avec la voiture sélectionnée
  @Output() selectAutoEvent = new EventEmitter<Auto>();

  // Événement envoyé au composant parent pour ajouter/retirer un favori
  @Output() toggleFavoriteEvent = new EventEmitter<Auto>();

  autoList: Auto[] = [];
  searched = false;

  // Texte tapé dans la zone de recherche (sert à afficher le bouton ✕)
  brandText = '';

  brandResults: Auto[] = [];
  maxPrice: number | null = null;
  sortBy = '';

  searchAutoList(brand: string) {
    const value = brand.trim().toLowerCase();
    this.brandResults = value
      ? this.autos.filter((auto) => auto.brand.toLowerCase().startsWith(value))
      : [];
    this.searched = value !== '';
    this.applyFilters();
  }

  // Vide la zone de recherche et efface les résultats
  clearSearch() {
    this.brandText = '';
    this.searchAutoList('');
  }

  updateMaxPrice(price: number | null) {
    this.maxPrice = price;
    this.applyFilters();
  }

  updateSort(sortBy: string) {
    this.sortBy = sortBy;
    this.applyFilters();
  }

  // Applique le filtre de prix puis le tri sur les résultats de la marque
  applyFilters() {
    const maxPrice = this.maxPrice;
    let list = maxPrice === null
      ? [...this.brandResults]
      : this.brandResults.filter((auto) => auto.price <= maxPrice);

    if (this.sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'power-desc') {
      list.sort((a, b) => b.power - a.power);
    }

    this.autoList = list;
  }

  isFavorite(auto: Auto) {
    return this.favorites.includes(auto);
  }

  toggleFavorite(auto: Auto) {
    this.toggleFavoriteEvent.emit(auto);
  }

  selectedAuto(auto: Auto) {
    this.selectAutoEvent.emit(auto);
  }
}
