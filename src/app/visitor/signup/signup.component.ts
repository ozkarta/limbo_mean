import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/service/app.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.style.css']
})

export class SignUpComponent implements OnInit {
  constructor(public appService: AppService) {}

  ngOnInit() {

  }
}
