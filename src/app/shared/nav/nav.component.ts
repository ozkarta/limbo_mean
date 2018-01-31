import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AppService} from '../service/app.service';
import {User} from '../models/user';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.style.css']
})
export class MainNavComponent implements OnInit {
  public user: User;
  constructor(private titleService: Title,
              public appService: AppService) {
    console.log('Nav Constructor...');
  }

  ngOnInit() {
    this.titleService.setTitle('Limbo MEAN app');
    this.appService.user
      .subscribe((user: User) => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        this.user = user;
        console.dir(this.user);
      });
  }
}
