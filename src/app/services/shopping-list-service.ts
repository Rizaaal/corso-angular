import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  items = signal<Item[]>([]);

  addItem(item: Item): void {
    this.items.update(list => [...list, item])
  }

  removeItem(index: number): void {
    this.items.update(list => {
      return list.filter((_, i) => i !== index)
    })
  }

  
}

type Item = string;
