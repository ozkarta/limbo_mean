import {NgModule} from '@angular/core';
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {VisitorHomeComponent} from './visitor/home/home.component';

export const routes:Routes = [
  {
    path: '',
    component: VisitorHomeComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
