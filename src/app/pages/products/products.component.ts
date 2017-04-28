import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, OnChanges } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import '@ngrx/core/add/operator/select';

import { ProductActions } from '../../core/actions/product-actions';
import { AppAllState } from '../../interfaces';
import { getProducts } from '../../core/reducers/selectors';

import { Product } from '../../core/models/product';
import { ProductDummyService } from '../../core/services/product-dummy.service';

@Component({
  selector: 'products',
  styleUrls: ['./products.scss'],
  templateUrl: './products.html'
})
export class Products implements OnInit {
  //products$: Observable<any>;
  data1: any;
  data2: any;

  actionsSubscription: Subscription;

  constructor(private store: Store<AppAllState>, private actions: ProductActions, private service: ProductDummyService, route: ActivatedRoute) {
    // Get all products for the product list component
    //   this.store.dispatch(this.actions.getAllProducts());
    //   this.store.select(getProducts)
    //     .subscribe((products) => {
    //       this.data1 = service.getProductSimpleLineChart(products[0]);
    //       this.data2 = service.getProductSimpleDonutChart(products[0]);
    //     });
    this.actionsSubscription = route.params
      .select<string>('id')
      .subscribe(id => {
        let product: Product;
        if (id) {
          this.store.select(getProducts).subscribe(products => product = products.find(pro => pro.id == id));
        } else {
          this.store.select(getProducts).subscribe(products => product = products[0]);
        }
        this.data1 = service.getProductSimpleLineChart(product);
        this.data2 = service.getProductSimpleDonutChart(product);
      });
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  ngOnInit() { }

  getResponsive(padding, offset) {
    return this.service.getResponsive(padding, offset);
  }

}
