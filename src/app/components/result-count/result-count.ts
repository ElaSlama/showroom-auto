import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  imports: [NgIf],
  selector: 'app-result-count',
  styleUrl: './result-count.css',
  templateUrl: './result-count.html',
})
export class ResultCount {
  // Nombre de voitures trouvées, reçu du composant parent
  @Input() count = 0;
}
