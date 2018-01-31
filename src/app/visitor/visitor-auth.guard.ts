import 'rxjs/add/operator/take';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AppService} from '../shared/service/app.service';
import {User} from '../shared/models/user';

@Injectable()
export class VisitorAuthGuard implements CanActivate {
  constructor(private router: Router,
              private appService: AppService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.appService.user
      .take(1)
      .map((user: User) => {
        if (user && user.role) {
          switch(user.role) {
            case  'employer' :
              this.router.navigate(['/employer']).then();
              return false;

            case  'employee' :
              this.router.navigate(['/employee']).then();
              return false;

            case  'admin' :
              this.router.navigate(['/admin']).then();
              return false;

            case  'owner' :
              this.router.navigate(['/owner']).then();
              return false;

            case  'developer' :
              this.router.navigate(['/developer']).then();
              return false;

            default:
              return true;
          }

        }
        return true;
      });
  }
}
