import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  reports: any = [];
  totalRecords: any;
  data: Subscription;
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getData();
    this.data = this.reportService.data.subscribe(res => {
      this.reports = res;
    });
    this.totalRecords = this.reportService.getTotalCalls();
    console.log(this.reportService.total);
  }

}
