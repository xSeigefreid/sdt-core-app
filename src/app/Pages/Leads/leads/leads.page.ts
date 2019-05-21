import { Component, OnInit, Input } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { LeadsPopoverComponent } from "./leads-popover/leads-popover.component";
import { HttpClient } from "@angular/common/http";
import { LeadsService } from "../leads.service";

@Component({
  selector: "app-leads",
  templateUrl: "./leads.page.html",
  styleUrls: ["./leads.page.scss"]
})
export class LeadsPage implements OnInit {
  isSearching = false;
  searchInput = null;
  constructor(
    public popoverController: PopoverController,
    private leadsService: LeadsService
  ) {}

  ngOnInit() {}

  async enableSearch(event) {
    this.popoverController
      .create({
        component: LeadsPopoverComponent,
        event
      })
      .then(popover => {
        popover.present();
        return popover.onDidDismiss();
      })
      .then(resultData => {
        if (resultData.role === "confirm") {
          this.isSearching = true;
          this.searchInput = resultData.data;
        }
        if (resultData.role === "cancel") {
          this.isSearching = false;
        }
      });
  }

  disableSearch() {
    this.isSearching = false;
    this.leadsService.fetchLeadsList();
  }
}
