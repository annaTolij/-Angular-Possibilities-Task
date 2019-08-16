import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule) },
  { path: 'pages', loadChildren: () => import(`./pages/pages.module`).then(m => m.PagesModule) },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
