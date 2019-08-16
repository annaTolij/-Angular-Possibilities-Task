import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
      { path: 'button', loadChildren: () => import(`./button/button.module`).then(m => m.ButtonModule) },
      { path: 'parent', loadChildren: () => import(`./parent/parent.module`).then(m => m.ParentModule) },
      { path: '', redirectTo: 'table', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
