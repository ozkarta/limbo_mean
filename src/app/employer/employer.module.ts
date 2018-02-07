import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {EmployerRoutingModule} from './employer.routes';
import {SidebarModule} from 'ng-sidebar';

// Components
import {EmployerNavComponent} from './nav/nav.component';
import {EmployerHomeComponent} from './home/home.component'
import {EmployerJobListComponent} from './job/job-list.component';
import {EmployerJobFormComponent} from './job/job-form.component';
import {EmployerJobDetailsComponent} from './job/job-details.component';

import {EmployerAuthGuard} from './employer-auth.guard';
@NgModule({
  declarations: [
    EmployerNavComponent,
    EmployerHomeComponent,
    EmployerJobListComponent,
    EmployerJobFormComponent,
    EmployerJobDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    EmployerRoutingModule
  ],
  providers: [
    EmployerAuthGuard
  ],
  exports: [
    RouterModule,
    EmployerNavComponent,
    EmployerJobListComponent,
    EmployerJobFormComponent,
    EmployerJobDetailsComponent
  ]
})

export class EmployerModule { }
