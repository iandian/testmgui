import { Component, Input } from '@angular/core';
import { Product } from '../../core/models/product';


@Component({
  selector: 'products-detail',
  template: `
    <div *ngFor="let product of products">
	  <div>
        <h2>{{product.id}}</h2>
      </div>
      <div>
        <h2>{{product.name}}</h2>
      </div>
    </div>
  `
})
export class ProductsDetailComponent {
  @Input() products: Product[] = [];

}
