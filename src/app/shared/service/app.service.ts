import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subscription} from 'rxjs';
import {User} from '../models/user';

@Injectable()
export class AppService {
  public busyIndicatorSubscription: Subscription;
  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor() {
    if (localStorage.getItem('token') && localStorage.getItem('user')) {
      this._loggedIn.next(true);
      this._user.next(<User>JSON.parse(localStorage.getItem('user')));
    }
  }

  get isLoggedIn() {
    return this._loggedIn;
  }

  get user() {
    return this._user;
  }

}
