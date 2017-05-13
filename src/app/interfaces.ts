import { ProductState } from './core/reducers/product-state';
import { BuildState } from './core/reducers/build-state';
import { ReportState } from './core/reducers/report-state';
import { AuthState } from './core/reducers/auth-state';


// This should hold the AppAllState interface
// Ideally importing all the substate for the application

export interface AppAllState {
  products: ProductState;
  builds: BuildState;
  reports: ReportState;
  auth: AuthState;
}
