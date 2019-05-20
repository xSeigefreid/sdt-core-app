import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
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
  constructor(private reportService: ReportService, public alertController: AlertController) {

   }
  
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Error',
      message: 'Empty Field/s',
      buttons: ['OK']
    });

    await alert.present();
  }
  search() {
   
      if(this.date1 == null || this.date2 == null){
        
      this.presentAlert();
  }
      
      else{
        this.reportService.getFilteredData(this.date1, this.date2);
      this.enableSearch();
      this.afterSearch = true;}
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
