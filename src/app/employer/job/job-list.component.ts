import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-employer-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.style.css']
})

export class EmployerJobListComponent implements OnInit {
  _opened: boolean = true;
  searchModel: string = '';

  constructor() {

  }

  ngOnInit() {

  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  search() {

  }
}