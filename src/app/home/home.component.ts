import { Component, OnInit } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { finalize, takeUntil,  } from 'rxjs/operators';
import { TableConfigService } from 'src/services/table-config.service';
import { PeriodicElements } from '../models/periodic-elements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private destroy = new Subject<void>();
  displayedColumns: string[];
  elements: PeriodicElements[] = [];
  
  constructor(private tableService: TableConfigService) {
  }
  ngOnInit(): void {
    forkJoin([this.tableService.getCols(), this.tableService.getRows()])
    .subscribe(([cols, rows]) => {
      this.displayedColumns = cols;
      this.elements = rows;
    })
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
