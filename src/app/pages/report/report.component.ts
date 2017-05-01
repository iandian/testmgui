import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, OnChanges } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import '@ngrx/core/add/operator/select';

import { ReportActions } from '../../core/actions/report-actions';
import { AppAllState } from '../../interfaces';
import { getSelectedReport } from '../../core/reducers/selectors';
import { Report } from '../../core/models/report';

import { ProductDummyService } from '../../core/services/product-dummy.service';


@Component({
  selector: 'report',
  styleUrls: ['./report.scss'],
  templateUrl: './report.html'
})
export class ReportComponent implements OnInit {
  report$: Observable<Report>;

  actionsSubscription: Subscription;

  constructor(private store: Store<AppAllState>, private route: ActivatedRoute, private actions: ReportActions) {
    this.actionsSubscription = route.params
      .select<string>('id')
      .subscribe(id => {
        this.store.dispatch(this.actions.getReportDetail(id));
        this.report$ = this.store.select(getSelectedReport);
      });
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  ngOnInit() { }


}
