import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployerAuthGuard} from './employer-auth.guard';

import {EmployerHomeComponent} from './home/home.component';
import {EmployerJobListComponent} from './job/job-list.component';
import {EmployerJobFormComponent} from './job/job-form.component';
import {EmployerJobDetailsComponent} from './job/job-details.component';


export const routes: Routes = [
  {
    path: 'employer',
    component: EmployerHomeComponent,
    canActivate: [EmployerAuthGuard],
    // children: [
    //   {
    //     path: 'jobs',
    //     component: EmployerJobListComponent
    //   }
    // ]
  },
  {
    path: 'employer/jobs',
    component: EmployerJobListComponent
  },
  {
    path: 'employer/jobs/new',
    component: EmployerJobFormComponent
  },
  {
    path: 'employer/jobs/edit/:id',
    component: EmployerJobFormComponent
  },
  {
    path: 'employer/jobs/:id',
    component: EmployerJobDetailsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})
export class EmployerRoutingModule {}
