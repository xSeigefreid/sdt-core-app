import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { CalendarPage } from "./calendar.page";
import { NgCalendarModule } from "ionic2-calendar";
import { AddTargetComponent } from "../add-target/add-target.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: CalendarPage
      }
    ]),
    NgCalendarModule
  ],
  declarations: [CalendarPage, AddTargetComponent],
  entryComponents: [AddTargetComponent]
})
export class CalendarPageModule {}
