import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BusyModule} from 'angular2-busy';

// Custom Modules
import {VisitorModule} from './visitor/visitor.module';
// Components
import {AppComponent} from './app.component';
import {MainNavComponent} from  './shared/nav/nav.component';
// Services
import {AppService} from './shared/service/app.service';
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
    NgbModule.forRoot(),
    BusyModule,

    VisitorModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
