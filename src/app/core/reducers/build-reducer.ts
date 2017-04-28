import { Build } from './../../core/models/build';
import { BuildActions } from './../actions/build-actions';
import { BuildState, BuildStateRecord } from './build-state';
import { Action, ActionReducer } from '@ngrx/store';

export const initialState: BuildState = new BuildStateRecord() as BuildState;

export const buildReducer: ActionReducer<BuildState> =
  (state: BuildState = initialState, { type, payload }: Action): BuildState => {
  switch (type) {

    case BuildActions.GET_BUILD_DETAIL_SUCCESS:
	 // if state.buildIds.has(payload.id) {
       // return state.merge({
        //  selectedBuild: state.buildEntities.get(payload.id)
       // }) as BuildState;
      //}
      return state.merge({
        selectedBuild: payload
      }) as BuildState;

    default:
      return state;
  }
};
