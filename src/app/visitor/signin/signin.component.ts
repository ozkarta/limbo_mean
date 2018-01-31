import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../shared/service/app.service';
import {UserService} from '../../shared/service/user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.style.css']
})

export class SignInComponent implements OnInit {
  public userLike: any = {
    email: 'ozbegi1@gmail.com',
    password: '12qwert12'
  };
  constructor(public appService: AppService,
              private userService: UserService,
              private router: Router) {}

  ngOnInit() {

  }

  localSignIn() {
    this.userService.signInUser(this.userLike)
      .subscribe(
        success => {
          console.dir(success);
          this.router.navigate(['/']);
        },
        error => {
          console.dir(error);
        }
      )
  }
}
