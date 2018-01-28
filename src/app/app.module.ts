import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {VisitorHomeComponent} from './visitor/home/home.component'
import {AppRoutingModule} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    VisitorHomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
