import { Report } from './../../core/models/report';
import { ReportActions } from './../actions/report-actions';
import { ReportState, ReportStateRecord } from './report-state';
import { Action, ActionReducer } from '@ngrx/store';

export const initialState: ReportState = new ReportStateRecord() as ReportState;

export const reportReducer: ActionReducer<ReportState> =
  (state: ReportState = initialState, { type, payload }: Action): ReportState => {
  switch (type) {

    case ReportActions.GET_REPORT_DETAIL_SUCCESS:
      return state.update(
        'selectedReport', value => payload
      ) as ReportState;

    default:
      return state;
  }
};
