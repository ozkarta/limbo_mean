import {NgModule} from '@angular/core';
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployerHomeComponent} from './home/home.component';
import {EmployerAuthGuard} from './employer-auth.guard';


export const routes:Routes = [
  {
    path: 'employer',
    component: EmployerHomeComponent,
    canActivate: [EmployerAuthGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})
export class EmployerRoutingModule {}
