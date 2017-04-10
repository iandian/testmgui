import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';

import { Store, StoreModule } from '@ngrx/store';
import { reducer } from './reducers/app.reducers';

// Components

// Services
import { HttpService } from './services/http';
import { ProductService } from './services/product.service';
import { ProductDummyService } from './services/product-dummy.service';

import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';

import { ProductActions } from './actions/product-actions';


export function httpInterceptor(
  backend: XHRBackend,
  defaultOptions: RequestOptions,
) {
  return new HttpService(backend, defaultOptions);
}

@NgModule({
  declarations: [
    // components
    // DummyService,
    // pipes
  ],
  exports: [
    // components
    // DummyService
  ],
  imports: [
    // Were not working on modules sice update to rc-5
    // TO BE moved to respective modules.
    EffectsModule.run(ProductEffects),
	StoreModule.provideStore(reducer)
  ],
  providers: [
    {
      provide: HttpService,
      useFactory: httpInterceptor,
      deps: [ XHRBackend, RequestOptions]
    },
    ProductDummyService,
    ProductService,
	ProductActions
  ]
})
export class CoreModule {}
