import { Component } from '@angular/core';
import { StarRatingComponent } from "../star-rating-component/star-rating-component";

@Component({
  selector: 'app-feedback-component',
  imports: [StarRatingComponent],
  templateUrl: './feedback-component.html',
  styleUrl: './feedback-component.css',
})
export class FeedbackComponent {
  voto: null | number = null
  massimo = 5

  onVoto(event: number){
    this.voto = event
  }
}
