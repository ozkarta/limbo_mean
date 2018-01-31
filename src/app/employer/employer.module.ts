import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {EmployerRoutingModule} from './employer.routes';

// Components
import {EmployerNavComponent} from './nav/nav.component';
import {EmployerHomeComponent} from './home/home.component'
import {EmployerAuthGuard} from './employer-auth.guard';
@NgModule({
  declarations: [
    EmployerNavComponent,
    EmployerHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModule.forRoot(),
    EmployerRoutingModule
  ],
  providers: [
    EmployerAuthGuard
  ],
  exports: [
    RouterModule,
    EmployerNavComponent
  ]
})

export class EmployerModule { }
