import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ReportPage } from './report.page';
import { ReportRoutingModule } from './reports-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReportRoutingModule
  ],
  declarations: [ReportPage]
})
export class ReportPageModule {}
