import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  imports: [FormsModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  name = "Zaino da montagna";
  brand = "Alpine pro";
  price = 89.90;
  discount = 0.20;
  stock=2;
  imageUrl = 'https://picsum.photos/300/200'; 
  tags = ['outdoor', 'sport', 'impermeabile'];
  available = true;

  compra(): void {
  // imposta available a false
  this.available = false
  }
  finalPrice(): number {
  // calcola il prezzo scontato → price - (price * discount)
  return this.price - (this.price * this.discount)
  }
}
