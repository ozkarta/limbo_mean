import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {EmployeeRoutingModule} from './employee.routes';

// Components
import {EmployeeNavComponent} from './nav/nav.component';
import {EmployeeHomeComponent} from './home/home.component'
import {EmployeeAuthGuard} from './employee-auth.guard';
@NgModule({
  declarations: [
    EmployeeNavComponent,
    EmployeeHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModule.forRoot(),
    EmployeeRoutingModule
  ],
  providers: [
    EmployeeAuthGuard
  ],
  exports: [
    RouterModule,
    EmployeeNavComponent
  ]
})

export class EmployeeModule { }
