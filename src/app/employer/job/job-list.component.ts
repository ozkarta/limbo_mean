import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-employer-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.style.css']
})

export class EmployerJobListComponent implements OnInit {
  private _opened: boolean = true;

  constructor() {

  }

  ngOnInit() {

  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}