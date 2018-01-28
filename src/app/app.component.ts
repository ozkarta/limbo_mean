import {Component} from '@angular/core';
import {AppService} from './shared/service/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public appService: AppService) {

  }
}
