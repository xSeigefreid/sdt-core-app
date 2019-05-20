import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  afterSearch = false;
  isSearching = false;
  date1: Date = null;
  date2: Date = null;
  constructor(private reportService: ReportService) { }
  
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
    
    this.reportService.getFilteredData(this.date1, this.date2);
    this.enableSearch();
    this.afterSearch = true;
    
  }
  clear(){
    this.reportService.negative = [];
    this.reportService.positive = [];
    this.reportService.noContact = [];
    this.reportService.total = 0;
    this.reportService.data.next();
    this.afterSearch = false;
  }
}
