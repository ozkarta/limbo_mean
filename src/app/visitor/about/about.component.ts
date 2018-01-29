import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/service/app.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.style.css']
})

export class AboutComponent implements OnInit {
  constructor(public appService: AppService) {}

  ngOnInit() {

  }
}
