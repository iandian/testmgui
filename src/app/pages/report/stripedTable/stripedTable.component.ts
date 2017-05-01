import { Component, Input } from '@angular/core';
import { Report } from '../../../core/models/report';

@Component({
  selector: 'striped-table',
  templateUrl: './stripedTable.html'
})
export class StripedTable {

  @Input() smartTableData: Report;

}
