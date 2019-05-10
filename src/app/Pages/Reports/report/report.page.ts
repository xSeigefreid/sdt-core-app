import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  isSearching = false;
  date1: Date = null;
  date2: Date = null;
  constructor() { }

  ngOnInit() {
  }

  enableSearch() {
    this.isSearching = !this.isSearching;
    this.date1 = null;
    this.date2 = null;
  }
  clearFields() {
    this.date1 = null;
    this.date2 = null;
  }
  search() {
    alert(this.date1 + '\n' + this.date2);
    this.enableSearch();
  }
}
