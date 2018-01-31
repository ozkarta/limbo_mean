import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BusyModule} from 'angular2-busy';
import {HttpClientModule} from '@angular/common/http';

// Custom Modules
import {VisitorModule} from './visitor/visitor.module';
import {EmployerModule} from './employer/employer.module';
import {EmployeeModule} from './employee/employee.module';
// Components
import {AppComponent} from './app.component';
import {MainNavComponent} from  './shared/nav/nav.component';
// Services
import {AppService} from './shared/service/app.service';
import {UserService} from './shared/service/user.service';
// Directives
import {EqualValidatorDirective} from './shared/util/validators.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule.forRoot(),
    BusyModule,

    VisitorModule,
    EmployerModule,
    EmployeeModule
  ],
  providers: [
    AppService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
