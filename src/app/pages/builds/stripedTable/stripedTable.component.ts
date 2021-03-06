import { Component, Input } from '@angular/core';
import { Build } from '../../../core/models/build';

@Component({
  selector: 'striped-table',
  templateUrl: './stripedTable.html'
})
export class StripedTable {

  @Input() smartTableData: Build;

}
