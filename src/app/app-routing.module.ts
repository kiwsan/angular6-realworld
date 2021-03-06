import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadChildren: '../app/pages/home/home.module#HomeModule'
  },
  {
    path: 'welcome',
    loadChildren: '../app/pages/welcome/welcome.module#WelcomeModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
