import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { LeadsInfoPage } from "./leads-info.page";
import { StatusComponent } from "./status/status.component";
import { ProfileComponent } from "./profile/profile.component";
import { SegmentChangeEventDetail } from "@ionic/core";
import { AddStatusComponent } from "./add-status/add-status.component";


const routes: Routes = [
  {
    path: "",
    component: LeadsInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LeadsInfoPage,
    StatusComponent,
    ProfileComponent,
    AddStatusComponent
  ],
  entryComponents: [AddStatusComponent],
  exports: [StatusComponent, ProfileComponent]
})
export class LeadsInfoPageModule {}
