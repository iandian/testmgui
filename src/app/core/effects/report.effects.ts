import { Report } from './../../core/models/report';
import { ReportActions } from './../actions/report-actions';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { ProductService } from './../../core/services/product.service';
import { ProductDummyService } from './../../core/services/product-dummy.service';
import { Action } from '@ngrx/store';


@Injectable()
export class ReportEffects {
  constructor(private actions$: Actions,
    private productService: ProductDummyService,
    //private productService: ProductService,
    private reportActions: ReportActions) { }

  @Effect()
  GetReportDetail$: Observable<Action> = this.actions$
    .ofType(ReportActions.GET_REPORT_DETAIL)
    .switchMap((action: Action) => this.productService.getReport(action.payload))
    .map((data: any) => this.reportActions.getReportDetailSuccess(data));
}
