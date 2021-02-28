import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PeriodicElements } from 'src/app/models/periodic-elements';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.scss']
})
export class PeriodicTableComponent {

  @Input()
  displayedColumns: string[];

  @Input()
  get elements(): PeriodicElements[] {
    return this.dataSource.data;
  }

  set elements(value: PeriodicElements[]) {
    this.dataSource.data = value;
  }

  dataSource: MatTableDataSource<PeriodicElements>;
  constructor() { 
    this.dataSource = new MatTableDataSource<PeriodicElements>();
  }

}
