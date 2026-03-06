import { Component, signal } from '@angular/core';
import { ProductCard } from "./components/products/product-card/product-card";
import { TrafficLight } from "./components/traffic-light/traffic-light";
import { PriceComponent } from "./components/price-component/price-component";
import { ChildComponent } from "./components/child-component/child-component";
import { FatherComponent } from "./components/father-component/father-component";

@Component({
  selector: 'app-root',
  imports: [PriceComponent, ChildComponent, FatherComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
