import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  nome = input<string>("Prodotto");
  prezzo = input<number>(0);
  disponibile = input<boolean>(true);
}
