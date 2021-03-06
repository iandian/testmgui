import { Product } from './../../core/models/product';
import { Build } from './../../core/models/build';
import { Report } from './../../core/models/report';
import { AppAllState } from './../../interfaces';
import { ProductState } from './product-state';
import { BuildState } from './build-state';
import { ReportState } from './report-state';
import { AuthState } from './auth-state';
import { createSelector } from 'reselect';
import { Map, List, fromJS } from 'immutable';

// Base product state selector function
export function getProductState(state: AppAllState): ProductState {
  return state.products;
}

// Base build state selector function
export function getBuildState(state: AppAllState): BuildState {
  return state.builds;
}

// Base report state selector function
export function getReportState(state: AppAllState): ReportState {
  return state.reports;
}

// Base auth state function
function getAuthState(state: AppAllState): AuthState {
    return state.auth;
}

// ******************** Individual selectors ***************************
export function fetchProducts(state: ProductState) {
  const ids = state.productIds.toJS();
  const productEntities = state.productEntities.toJS();
  return ids.map(id => productEntities[id]);
}

export function fetchBuilds(state: BuildState) {
  const ids = state.buildIds.toJS();
  const buildEntities = state.buildEntities.toJS();
  return ids.map(id => buildEntities[id]);
}

export function fetchReports(state: ReportState) {
  const ids = state.reportIds.toJS();
  const reportEntities = state.reportEntities.toJS();
  return ids.map(id => reportEntities[id]);
}

const fetchSelectedProduct = function (state: ProductState): Product {
  return state.selectedProduct;
};

const fetchSelectedBuild = function (state: BuildState): Build {
  return state.selectedBuild;
};

const fetchSelectedReport = function (state: ReportState): Report {
  return state.selectedReport;
};

const fetchAuthStatus = function(state: AuthState): boolean {
    return state.isAuthenticated;
}

// *************************** PUBLIC API's ****************************
export const getSelectedProduct = createSelector(getProductState, fetchSelectedProduct);
export const getProducts = createSelector(getProductState, fetchProducts);

export const getSelectedBuild = createSelector(getBuildState, fetchSelectedBuild);
export const getBuilds = createSelector(getBuildState, fetchBuilds);

export const getSelectedReport = createSelector(getReportState, fetchSelectedReport);
export const getReports = createSelector(getReportState, fetchReports);

export const getAuthStatus = createSelector(getAuthState, fetchAuthStatus);
