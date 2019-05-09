import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeadsPage } from './leads.page';
import { LeadsPageRoutingModule } from './leads.route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadsPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: LeadsPage
      }
    ])
  ],
  declarations: [LeadsPage]
})
export class LeadsPageModule {}
