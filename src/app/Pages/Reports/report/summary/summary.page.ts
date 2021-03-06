import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';

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
  isFetching = false;
  constructor(private reportService: ReportService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.data = this.reportService.data.subscribe(res => {
      this.clearData();
      // this.reportService.calculate();
      this.reports = res;
      this.totalRec = this.reportService.total;
      this.positive = this.reportService.positive;
      this.noContact = this.reportService.noContact;
      this.negative = this.reportService.negative;
      this.changeDisplay();
      this.isFetching = false;
    });
    
  }
  
  changeDisplay(){
    for(let row in this.positive){
      this.totalCalls += +this.positive[row].cnt;
      this.positiveNum += +this.positive[row].cnt;
      // console.log(this.positive[row]);
    }
    for(let row in this.negative){
      this.totalCalls += +this.negative[row].cnt;
      this.negativeNum += +this.negative[row].cnt;
    }
    for(let row in this.noContact){
      this.totalCalls += +this.noContact[row].cnt;
      this.noContactNum += +this.noContact[row].cnt;
    }
    this.neverDialNum = this.totalRec - this.totalCalls;
  }
  clearData() {
    this.positive = [];
    this.totalCalls = 0;
    this.positiveNum = 0;
    this.negativeNum = 0;
    this.noContactNum = 0;
    this.neverDialNum = 0;
  }
}
