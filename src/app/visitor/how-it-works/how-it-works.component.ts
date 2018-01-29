import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/service/app.service';
@Component({
  selector: 'app-signin',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.style.css']
})

export class HowItWorksComponent implements OnInit {
  constructor(public appService: AppService) {}

  ngOnInit() {

  }
}
