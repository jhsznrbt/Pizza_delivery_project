// home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pizzas = [
    {
      id: 1,
      name: 'Margherita',
      description: 'Friss paradicsomszósz, mozzarella, bazsalikom',
      price: 1250,
      image: 'margherita.jpg' // Frissítve
    },
    {
      id: 2,
      name: 'Pepperoni',
      description: 'Friss paradicsomszósz, mozzarella, pepperoni',
      price: 1400,
      image: 'pepperoni.jpg' // Frissítve
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
