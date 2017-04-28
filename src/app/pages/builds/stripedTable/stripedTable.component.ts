import { Component, Input } from '@angular/core';

import {BasicTablesService} from '../../basicTables.service';

@Component({
  selector: 'striped-table',
  templateUrl: './stripedTable.html'
})
export class StripedTable {

  @Input() smartTableData: any[];

}
