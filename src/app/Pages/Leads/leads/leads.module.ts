import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { LeadsPage } from './leads.page';
import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsPopoverComponent } from './leads-popover/leads-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    LeadsRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component:LeadsPage
      }
    ])
  ],
  entryComponents: [LeadsPopoverComponent],
  declarations: [LeadsPage,LeadsPopoverComponent]
})
export class LeadsPageModule {}
