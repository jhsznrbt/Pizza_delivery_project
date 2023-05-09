import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pizza: Pizza = <Pizza>{};

  constructor(private route: ActivatedRoute, private pizzaService: PizzaService) {
  }

  ngOnInit(): void {
    this.getPizza();
  }

  getPizza(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.pizzaService.getPizza(id)
        .subscribe(pizza => this.pizza = pizza);
    }
  }
}
