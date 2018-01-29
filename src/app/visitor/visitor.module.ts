import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {VisitorRoutingModule} from './visitor.routes';

import {VisitorHomeComponent} from './home/home.component'
import {VisitorNavComponent} from './nav/nav.component';
import {SignInComponent} from './signin/signin.component';
import {SignUpComponent} from './signup/signup.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';

@NgModule({
  declarations: [
    VisitorHomeComponent,
    VisitorNavComponent,
    SignInComponent,
    SignUpComponent,
    ContactComponent,
    AboutComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule,
    VisitorRoutingModule
  ],
  providers: [
  ],
  exports: [
    RouterModule,
    VisitorNavComponent
  ]
})

export class VisitorModule { }
