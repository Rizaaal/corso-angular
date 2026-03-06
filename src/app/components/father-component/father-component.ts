import { Component } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-father-component',
  imports: [ChildComponent],
  templateUrl: './father-component.html',
  styleUrl: './father-component.css',
})
export class FatherComponent {
  products = [
    { nome: "Bicchiere", prezzo: 3.5, disponibile: true },
    { nome: "Action-figure", prezzo: 55, disponibile: false },
    { nome: "t-shirt", prezzo: 11.99, disponibile: true },
  ]
}
