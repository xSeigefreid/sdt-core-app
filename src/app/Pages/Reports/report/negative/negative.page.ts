import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-negative',
  templateUrl: './negative.page.html',
  styleUrls: ['./negative.page.scss'],
})
export class NegativePage implements OnInit {
  data: Subscription;
  negative: any = [];
  declined: number = 0;
  doNotCall: number = 0;
  doNotEmail: number = 0;
  dqClient: number = 0;
  faxMachine: number = 0;
  hungUp: number = 0;
  notInService: number = 0;
  notInterested: number = 0;
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.data = this.reportService.data.subscribe(res => {
      this.reportService.calculate();
      this.negative = this.reportService.negative;
      this.clearData();
      this.displayData();
    });
  }
  displayData() {
    for (let row in this.negative) {
      if (this.negative[row].call_result_id === 12) {
        this.declined += this.negative[row].cnt;
      } else if (this.negative[row].call_result_id === 24) {
        this.doNotCall += this.negative[row].cnt;
      } else if (this.negative[row].call_result_id === 25) {
        this.doNotEmail += this.negative[row].cnt;
      } else if (this.negative[row].call_result_id === 15) {
        this.dqClient += this.negative[row].cnt;
      } else if (this.negative[row].call_result_id === 26) {
        this.faxMachine += this.negative[row].cnt;
      } else if (this.negative[row].call_result_id === 18) {
        this.hungUp += this.negative[row].cnt;
      } else if (this.negative[row].call_result_id === 27) {
        this.notInService += this.negative[row].cnt;
      } else if (this.negative[row].call_result_id === 16) {
        this.notInterested += this.negative[row].cnt;
      }
    }
  }

  clearData() {
    this.declined = 0;
    this.doNotCall = 0;
    this.doNotEmail = 0;
    this.dqClient = 0;
    this.faxMachine = 0;
    this.hungUp = 0;
    this.notInService = 0;
    this.notInterested = 0;
  }
}
