import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentlRoutingModule } from './parent-routing.module';
import { ParentComponent } from '../parent/parent.component';
import { FirstChildrenComponent } from './first-children/first-children.component';
import { SecondChildrenComponent } from './second-children/second-children.component';
import { ThirdChildrenComponent } from './third-children/third-children.component';
import { MatInputModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ParentComponent, FirstChildrenComponent, SecondChildrenComponent, ThirdChildrenComponent],
  imports: [
    CommonModule,
    ParentlRoutingModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [],
  entryComponents: [],
})
export class ParentModule { }
