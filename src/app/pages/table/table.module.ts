import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { MatTableModule, MatSortModule, MatInputModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
  ],
  providers: [],
  entryComponents: [],
})
export class TableModule { }
