import { Build } from './../../core/models/build';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class BuildActions {
    static GET_BUILD_DETAIL = 'GET_BUILD_DETAIL';
    static GET_BUILD_DETAIL_SUCCESS = 'GET_BUILD_DETAIL_SUCCESS';

    getBuildDetail(id: string): Action {
        return {
            type: BuildActions.GET_BUILD_DETAIL,
            payload: id
        };
    }

    getBuildDetailSuccess(product: Build): Action {
        return {
            type: BuildActions.GET_BUILD_DETAIL_SUCCESS,
            payload: product
        };
    }

}
