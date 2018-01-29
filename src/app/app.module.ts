import {BrowserModule} from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
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
