import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app.routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BusyModule} from 'angular2-busy';

import {AppComponent} from './app.component';
import {VisitorHomeComponent} from './visitor/home/home.component'
import {VisitorNavComponent} from './visitor/nav/nav.component';
import {MainNavComponent} from './shared/nav/nav.component'

import {AppService} from './shared/service/app.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,

    VisitorHomeComponent,
    VisitorNavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BusyModule,

    AppRoutingModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
