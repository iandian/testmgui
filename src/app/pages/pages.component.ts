import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { BaMenuService } from '../theme';
import { ProductActions } from '../core/actions/product-actions';
import { AppAllState } from '../interfaces';
import { getProducts } from '../core/reducers/selectors';

import { Product } from '../core/models/product';
import { MenuService } from '../core/services/menu.service';


@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://akveo.com">Akveo</a> 2016</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {
  page_menu: Routes;

  constructor(private _menuService: BaMenuService, private store: Store<AppAllState>, private actions: ProductActions, private menuService: MenuService) {
    this.store.dispatch(this.actions.getAllProducts());
    this.store.select(getProducts)
    .subscribe((products) => {
      this.page_menu = menuService.generateMenu(products);
});
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(this.page_menu);
  }
}
