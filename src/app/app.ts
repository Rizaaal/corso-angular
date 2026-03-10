import { Component } from '@angular/core';
import { AddItemComponent } from "./components/add-item-component/add-item-component";
import { ShoppingListComponent } from "./components/shopping-list-component/shopping-list-component";

@Component({
  selector: 'app-root',
  imports: [AddItemComponent, ShoppingListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
