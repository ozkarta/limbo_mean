import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.style.css']
})
export class MainNavComponent implements OnInit {

  constructor(private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle('Limbo MEAN app');
  }
}
