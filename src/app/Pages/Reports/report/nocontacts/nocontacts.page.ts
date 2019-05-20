import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nocontacts',
  templateUrl: './nocontacts.page.html',
  styleUrls: ['./nocontacts.page.scss'],
})
export class NocontactsPage implements OnInit {
  data: Subscription;
  noContact: any = [];
  anvm: number = 0;
  ansMachine: number = 0;
  busy: number = 0;
  notAvailable: number = 0;
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.data = this.reportService.data.subscribe(res => {
      // this.reportService.calculate();
      this.clearData();
      this.noContact = this.reportService.noContact;
      
      this.displayData();
      // console.log("test no contact");
    });
  }
  ionViewWillEnter() {
    this.clearData();
    this.noContact = this.reportService.noContact;
    this.displayData();
    // console.log("test no contact");
  }

  displayData() {
    for (let row in this.noContact) {
      if (this.noContact[row].call_result_id === 14) {
        this.anvm += this.noContact[row].cnt;
      } else if (this.noContact[row].call_result_id === 13) {
        this.ansMachine += this.noContact[row].cnt;
      } else if (this.noContact[row].call_result_id === 23) {
        this.busy += this.noContact[row].cnt;
      } else if (this.noContact[row].call_result_id === 22) {
        this.notAvailable += this.noContact[row].cnt;
      }
    }
  }
  clearData() {
    
    this.anvm = 0;
    this.ansMachine = 0;
    this.busy = 0;
    this.notAvailable = 0;
  }
}
