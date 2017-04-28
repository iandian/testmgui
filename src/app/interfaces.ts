import { ProductState } from './core/reducers/product-state';
import { BuildState } from './core/reducers/build-state';


// This should hold the AppAllState interface
// Ideally importing all the substate for the application

export interface AppAllState {
  products: ProductState;
  builds: BuildState;
}
