import { Component, signal } from '@angular/core';
import { ProductCard } from "./components/products/product-card/product-card";
import { TrafficLight } from "./components/traffic-light/traffic-light";
import { PriceComponent } from "./components/price-component/price-component";
import { ChildComponent } from "./components/child-component/child-component";
import { FatherComponent } from "./components/father-component/father-component";
import { StarRatingComponent } from "./components/star-rating-component/star-rating-component";
import { FeedbackComponent } from "./components/feedback-component/feedback-component";

@Component({
  selector: 'app-root',
  imports: [FatherComponent, StarRatingComponent, FeedbackComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
