import { Component, OnInit, Input } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { CategoriesModel } from "../categories.model";
import { LeadsService } from "../../leads.service";

@Component({
  selector: "app-leads-popover",
  templateUrl: "./leads-popover.component.html",
  styleUrls: ["./leads-popover.component.scss"]
})
export class LeadsPopoverComponent implements OnInit {
  @Input() cat: CategoriesModel[] = [
    {
      category: "All"
    },
    {
      category: "Appointment Set"
    },
    {
      category: "Rescheduled"
    },
    {
      category: "For follow-up"
    },
    {
      category: "Close won"
    },
    {
      category: "Account assign"
    },
    {
      category: "Account lost"
    },
    {
      category: "No Budget"
    },
    {
      category: "No Interest"
    },
    {
      category: "Sent Proposal"
    }
  ];

  searchInput: string;
  date1: string;
  date2: string;
  categoryInput: string;

  constructor(
    public popoverController: PopoverController,
    private leadsService: LeadsService
  ) {}

  ngOnInit() {}

  close() {
    this.popoverController.dismiss(null, "cancel");
  }
  clearFields() {
    this.date1 = null;
    this.date2 = null;
    this.searchInput = null;
  }
  search() {
    this.leadsService.searchLeadsList(this.date1, this.date2, this.searchInput);
    this.popoverController.dismiss(this.searchInput, "confirm");
  }
}
