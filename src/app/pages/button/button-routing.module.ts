import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamComponent } from './param/param.component';
import { ButtonComponent } from './button.component';


const routes: Routes = [
  {
    path: '', component: ButtonComponent, children: [
      { path: 'param/:id', component: ParamComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonRoutingModule { }
