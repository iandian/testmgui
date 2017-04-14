import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProductEffects } from './product.effects';
import { ProductDummyService } from './../../core/services/product-dummy.service';
import { Observable } from 'rxjs/Observable';
import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product-actions';

describe('ProductEffects', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
	  ProductActions,
      ProductEffects,
      {
        provide: ProductDummyService,
        useValue: jasmine.createSpyObj('productService', ['getProducts'])
      }
    ]
  }));

  function setup(params?: {getProductsReturnValue: any}) {
    const productService = TestBed.get(ProductDummyService);
    if (params) {
      productService.getProducts.and.returnValue(params.getProductsReturnValue);
    }

    return {
      runner: TestBed.get(EffectsRunner),
      productEffects: TestBed.get(ProductEffects)
    };
  }

  describe('products$', () => {
    it('should return a new product.GET_ALL_PRODUCTS_SUCCESS, with the products, on success, after the de-bounce', fakeAsync(() => {
      const product1 = {id: '111', name: 'product111'} as Product;
      const product2 = {id: '222', name: 'product222'} as Product;
      const products = {products: [product1, product2]} as Object;

      const {runner, productEffects} = setup({getProductsReturnValue: Observable.of(products)});

	  let productActions = new ProductActions()
      const expectedResult = productActions.getAllProductsSuccess({products: products});
      runner.queue(productActions.getAllProducts());

      let result = null;
      productEffects.GetAllProducts$.subscribe(_result => result = _result);
      expect(result).toEqual(expectedResult);
    }));

    it('should return a new book.SearchCompleteAction, with an empty array, if the books service throws', fakeAsync(() => {
      const {runner, bookEffects} = setup({searchBooksReturnValue: Observable.throw(new Error())});

      const expectedResult = new SearchCompleteAction([]);
      runner.queue(new SearchAction('query'));

      let result = null;
      bookEffects.search$.subscribe(_result => result = _result);
      tick(299); // test de-bounce
      expect(result).toBe(null);
      tick(300);
      expect(result).toEqual(expectedResult);
    }));

    it(`should not do anything if the query is an empty string`, fakeAsync(() => {
      const {runner, bookEffects} = setup();

      runner.queue(new SearchAction(''));
      let result = null;
      bookEffects.search$.subscribe({
        next: () => result = false,
        complete: () => result = false,
        error: () => result = false
      });

      tick(300);
      expect(result).toBe(null);
    }));

  });
});

