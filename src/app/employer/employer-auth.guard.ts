import 'rxjs/add/operator/take';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AppService} from '../shared/service/app.service';
import {User} from '../shared/models/user';

@Injectable()
export class EmployerAuthGuard implements CanActivate {
  constructor(private router: Router,
              private appService: AppService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.appService.user
      .take(1)
      .map((user: User) => {
        if (user && user.role) {
          switch(user.role) {
            case  'employer' :
              return true;
            default:
              this.router.navigate(['/']).then();
              return false;
          }
        }
        this.router.navigate(['/']).then();
        return true;
      });
  }
}
