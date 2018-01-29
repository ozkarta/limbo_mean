import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/service/app.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.style.css']
})

export class SignInComponent implements OnInit {
  constructor(public appService: AppService) {}

  ngOnInit() {

  }
}
