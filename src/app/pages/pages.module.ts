import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatFormFieldModule
  ]
})
export class PagesModule { }
