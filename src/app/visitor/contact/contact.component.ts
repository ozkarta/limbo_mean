import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/service/app.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.style.css']
})

export class ContactComponent implements OnInit {
  constructor(public appService: AppService) {}

  ngOnInit() {

  }
}
