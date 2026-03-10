import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list-service';

@Component({
  selector: 'app-add-item-component',
  imports: [],
  templateUrl: './add-item-component.html',
  styleUrl: './add-item-component.css',
})
export class AddItemComponent {
  shoppingList = inject(ShoppingListService);
}
