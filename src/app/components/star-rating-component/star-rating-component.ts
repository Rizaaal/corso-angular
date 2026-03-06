import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-star-rating-component',
  imports: [],
  templateUrl: './star-rating-component.html',
  styleUrl: './star-rating-component.css',
})
export class StarRatingComponent {
  massimo = input<number>(5)
  stelle = computed(() => 
    Array(this.massimo()).fill("★")
  )
  votoSelezionato = output<number>();
}
