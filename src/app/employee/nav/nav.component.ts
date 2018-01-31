import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/service/app.service';
import {UserService} from '../../shared/service/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.style.css']
})
export class EmployeeNavComponent implements OnInit {

  constructor(public appService: AppService,
              private userService: UserService,
              private router: Router) {

  }

  ngOnInit() {

  }

  logOut() {
    this.userService.logOut()
      .subscribe(
        success => {
          this.router.navigate(['/']);
        },
        error => {
          console.dir(error);
        }
      )
  }
}
