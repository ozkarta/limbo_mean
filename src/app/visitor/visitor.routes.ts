import {NgModule} from '@angular/core';
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {VisitorHomeComponent} from './home/home.component';
import {SignInComponent} from './signin/signin.component';
import {SignUpComponent} from './signup/signup.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';

import {VisitorAuthGuard} from './visitor-auth.guard';

export const routes:Routes = [
  {
    path: '',
    component: VisitorHomeComponent,
    canActivate: [VisitorAuthGuard]
  },
  // Different Sign In URLS
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'sign-in',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  // ______________________________
  // Different Sign In URLS
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'sign-up',
    redirectTo: '/signup',
    pathMatch: 'full'
  },
  {
    path: 'register',
    redirectTo: '/signup',
    pathMatch: 'full'
  },
  // ______________________________
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent
  },
  {
    path: 'faq',
    redirectTo: '/how-it-works',
    pathMatch: 'full'
  },
  {
    path: 'FAQ',
    redirectTo: '/how-it-works',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})
export class VisitorRoutingModule {}
