import {NgModule} from '@angular/core';
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeHomeComponent} from './home/home.component';
import {EmployeeAuthGuard} from './employee-auth.guard';


export const routes:Routes = [
  {
    path: 'employee',
    component: EmployeeHomeComponent,
    canActivate: [EmployeeAuthGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})
export class EmployeeRoutingModule {}
