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
  totalRec: number = 0;
  positive: any = [];
  noContact: any = [];
  negative: any = [];
  totalCalls: number = 0;
  positiveNum: number = 0;
  negativeNum: number = 0;
  noContactNum: number = 0;
  neverDialNum: number = 0;
  data: Subscription;
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getData();
    this.data = this.reportService.data.subscribe(res => {
      this.reportService.calculate();
      this.reports = res;
      this.totalRec = this.reportService.total;
      this.positive = this.reportService.positive;
      this.noContact = this.reportService.noContact;
      this.negative = this.reportService.negative;
      this.changeDisplay();
    });
  }
  changeDisplay(){
    for(let row in this.positive){
      this.totalCalls += this.positive[row].cnt;
      this.positiveNum += this.positive[row].cnt;
    }
    for(let row in this.negative){
      this.totalCalls += this.negative[row].cnt;
      this.negativeNum += this.negative[row].cnt;
    }
    for(let row in this.noContact){
      this.totalCalls += this.noContact[row].cnt;
      this.noContactNum += this.noContact[row].cnt;
    }
    this.neverDialNum = this.totalRec - this.totalCalls;
  }
}
