import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeadsPage } from './leads.page';
<<<<<<< HEAD
import { LeadsPageRoutingModule } from './leads.route.module';
=======
import { LeadsRoutingModule } from './leads-routing.module';
>>>>>>> d7a7e480a75f2ae8eacf4b7a04b9e79e1a08ce83

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    LeadsPageRoutingModule,
=======
    LeadsRoutingModule,
>>>>>>> d7a7e480a75f2ae8eacf4b7a04b9e79e1a08ce83
    RouterModule.forChild([
      {
        path: '',
        component:LeadsPage
      }
    ])
  ],
  declarations: [LeadsPage]
})
export class LeadsPageModule {}
