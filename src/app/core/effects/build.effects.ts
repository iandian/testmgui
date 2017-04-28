import { Build } from './../../core/models/build';
import { BuildActions } from './../actions/build-actions';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { ProductService } from './../../core/services/product.service';
import { ProductDummyService } from './../../core/services/product-dummy.service';
import { Action } from '@ngrx/store';


@Injectable()
export class BuildEffects {
  constructor(private actions$: Actions,
              private productService: ProductDummyService,
              //private productService: ProductService,
              private buildActions: BuildActions) { }

  @Effect()
  GetBuildDetail$: Observable<Action> = this.actions$
    .ofType(BuildActions.GET_BUILD_DETAIL)
    .switchMap((action: Action) => this.productService.getBuild(action.payload))
    .map((data: any) => this.buildActions.getProductDetailSuccess(data));
}
