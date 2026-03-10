import { Component, effect, inject } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list-service';

@Component({
  selector: 'app-shopping-list-component',
  imports: [],
  templateUrl: './shopping-list-component.html',
  styleUrl: './shopping-list-component.css',
})
export class ShoppingListComponent {
  shoppingList = inject(ShoppingListService);
}
