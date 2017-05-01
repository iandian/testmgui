import { Report } from './../../core/models/report';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class ReportActions {
    static GET_REPORT_DETAIL = 'GET_REPORT_DETAIL';
    static GET_REPORT_DETAIL_SUCCESS = 'GET_REPORT_DETAIL_SUCCESS';

    getReportDetail(id: string): Action {
        return {
            type: ReportActions.GET_REPORT_DETAIL,
            payload: id
        };
    }

    getReportDetailSuccess(report: Report): Action {
        return {
            type: ReportActions.GET_REPORT_DETAIL_SUCCESS,
            payload: report
        };
    }

}
