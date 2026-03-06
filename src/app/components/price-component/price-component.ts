import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-price-component',
  imports: [],
  templateUrl: './price-component.html',
  styleUrl: './price-component.css',
})
export class PriceComponent {
  prezzoNetto = signal<number>(100);
  aliquotaIVA = signal<number>(22);
  prezzoLordo = computed(
    () => this.prezzoNetto() * (1 + this.aliquotaIVA() / 100)
  )
}
