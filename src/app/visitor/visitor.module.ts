import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {VisitorRoutingModule} from './visitor.routes';

import {VisitorHomeComponent} from './home/home.component'
import {VisitorNavComponent} from './nav/nav.component';
import {SignInComponent} from './signin/signin.component';
import {SignUpComponent} from './signup/signup.component';
import {SignUpPartialComponent} from './signup/signup-partial.component'
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';

@NgModule({
  declarations: [
    VisitorHomeComponent,
    VisitorNavComponent,
    SignInComponent,
    SignUpComponent,
    SignUpPartialComponent,
    ContactComponent,
    AboutComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModule.forRoot(),
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
