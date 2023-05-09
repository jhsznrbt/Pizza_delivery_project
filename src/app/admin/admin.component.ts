import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  pizzas: Pizza[] = [];
  selectedPizza: Pizza | null = null;
  showAddPizzaModal = false;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.loadPizzas();
  }

  loadPizzas(): void {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
    });
  }

  deletePizza(id: string): void {
    this.pizzaService.deletePizza(id).subscribe(() => {
      this.loadPizzas();
    });
  }

  // In admin.component.ts
  addPizza(): void {
    const newPizza: Pizza = {
      _id: '',
      id: 0,
      name: '',
      description: '',
      price: 0,
      image: ''
    };
    this.pizzaService.addPizza(newPizza).subscribe(() => {
      this.loadPizzas();
    });
  }

  toggleAddPizzaModal(): void {
    this.showAddPizzaModal = !this.showAddPizzaModal;
  }

}
