import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs';

@Injectable()
export class AppService {
  public busyIndicatorSubscription: Subscription;

  constructor() {
  }

}
