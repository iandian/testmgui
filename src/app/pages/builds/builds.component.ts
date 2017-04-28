import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, OnChanges } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import '@ngrx/core/add/operator/select';

import { BuildActions } from '../../core/actions/build-actions';
import { AppAllState } from '../../interfaces';
import { getSelectedBuild } from '../../core/reducers/selectors';

import { ProductDummyService } from '../../core/services/product-dummy.service';


@Component({
  selector: 'builds',
  styleUrls: ['./builds.scss'],
  templateUrl: './builds.html'
})
export class Builds implements OnInit {
  build$: Observable<any>;

  actionsSubscription: Subscription;

  constructor(private store: Store<AppAllState>, private route: ActivatedRoute, private actions: BuildActions) {
    this.actionsSubscription = route.params
      .select<string>('id')
      .subscribe(id => {
        this.store.dispatch(this.actions.getBuildDetail(id));
        this.build$ = this.store.select(getSelectedBuild);
      });
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  ngOnInit() { }


}
