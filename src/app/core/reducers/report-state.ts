/**
 * Read more about Immutable Records here
 * 1. https://coderwall.com/p/vxk_tg/using-immutable-js-in-typescript
 * 2. http://untangled.io/immutable-js-the-foolproof-guide-to-creating-lists/
 * 3. https://blog.jscrambler.com/immutable-data-immutable-js/
 * 4. https://medium.com/azendoo-team/immutable-record-react-redux-99f389ed676#.91s1g124s
 */

import { Report } from './../../core/models/report';
import { Map, Record, List } from 'immutable';

export interface ReportState extends Map<string, any> {
  reportIds: List<number>;
  reportEntities: Map<number, Report>;
  selectedReportId: number;
  selectedReport: Report;
}

export const ReportStateRecord = Record({
  reportIds: List([]),
  reportEntities: Map({}),
  selectedReportId: null,
  selectedReport: Map({})
});
