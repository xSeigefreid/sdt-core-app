import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  isSearching = false;
  date1: Date = null;
  date2: Date = null;
  reports: any;
  data: Subscription;
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getData();
    this.data = this.reportService.data.subscribe(reports => {
      this.reports = reports;
    });
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
    this.reportService.getFilteredData(this.date1, this.date2);
    this.enableSearch();
  }
}
