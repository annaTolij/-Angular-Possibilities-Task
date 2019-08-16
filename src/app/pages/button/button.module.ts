import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ParamComponent } from './param/param.component';
import { ButtonComponent } from './button.component';
import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [ButtonComponent, ParamComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ButtonModule { }
