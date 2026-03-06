import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  imports: [],
  templateUrl: './traffic-light.html',
  styleUrl: './traffic-light.css',
})
export class TrafficLight {
  colore = signal<string>("rosso")

  next(){
    const colori = ["rosso", "verde", "giallo"];
    this.colore.update(prevColor => {
      const prevIndex = colori.indexOf(prevColor);
      return colori[(prevIndex + 1) % colori.length]
    })
  }
}
