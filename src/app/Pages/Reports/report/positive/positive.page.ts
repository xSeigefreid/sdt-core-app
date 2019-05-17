import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-positive',
  templateUrl: './positive.page.html',
  styleUrls: ['./positive.page.scss'],
})
export class PositivePage implements OnInit {
  data: Subscription;
  positive: any = [];
  appointments: number = 0;
  forFF: number = 0;
  forQA: number = 0;
  resetApp: number = 0;
  furtherInfo: number = 0;
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getData();
    this.data = this.reportService.data.subscribe(res => {
      this.reportService.calculate();
      this.positive = this.reportService.positive;
      this.displayData();
    });
  }
  displayData() {
    for (let row in this.positive) {
      if (this.positive[row].call_result_id === 1 || this.positive[row].call_result_id === 7) {
        this.appointments += this.positive[row].cnt;
      } else if (this.positive[row].call_result_id === 8) {
        this.forQA += this.positive[row].cnt;
      } else if (this.positive[row].call_result_id === 9) {
        this.resetApp += this.positive[row].cnt;
      } else if (this.positive[row].call_result_id === 10) {
        this.forFF += this.positive[row].cnt;
      } else if (this.positive[row].call_result_id === 17) {
        this.furtherInfo += this.positive[row].cnt;
      }
    }
  }
}
