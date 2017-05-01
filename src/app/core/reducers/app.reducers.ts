import { productReducer } from './product-reducer';
import { ProductState } from './product-state';
import { buildReducer } from './build-reducer';
import { BuildState } from './build-state';
import { reportReducer } from './report-reducer';
import { ReportState } from './report-state';


/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers, ActionReducer, Action } from '@ngrx/store';

import { AppAllState } from '../../interfaces';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

const reducers = {
  products: productReducer,
  builds: buildReducer,
  reports: reportReducer
};

export const developmentReducer: ActionReducer<AppAllState> = compose(storeFreeze, combineReducers)(reducers);;
const productionReducer: ActionReducer<AppAllState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  // if (environment.production) {
    // return productionReducer(state, action);
  // } else {
    return developmentReducer(state, action);
  // }
}
