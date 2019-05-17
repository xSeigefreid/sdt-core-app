import { Component, OnInit, Input } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { CategoriesModel } from "../categories.model";
import { LeadsService } from "../../leads.service";
import { ActionSheetController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";

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
  searchOption: string;
  date1: string;
  date2: string;
  categoryInput: string;
  clearEnabled: boolean = true;

  constructor(
    public popoverController: PopoverController,
    private leadsService: LeadsService,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  close() {
    this.popoverController.dismiss(null, "cancel");
  }
  clearFields() {
    this.date1 = null;
    this.date2 = null;
    this.searchInput = null;
    this.categoryInput = null;
    this.clearEnabled = false;
  }
  search() {
    if (this.searchOption == "name" || this.searchOption == "date") {
      if (
        (this.searchOption == "name" && this.searchInput == null) ||
        (this.searchOption == "date" &&
          (this.date1 == null || this.date2 == null))
      ) {
        this.presentAlert();
        return;
      }
      this.leadsService.searchLeadsList(
        this.date1,
        this.date2,
        this.searchInput
      );
      this.popoverController.dismiss(this.searchInput, "confirm");
    }
    if (this.searchOption == "type")
      this.leadsService.fetchLeadsCategory(this.categoryInput);
    this.popoverController.dismiss(this.categoryInput, "confirm");
  }
  searching() {
    this.presentActionSheet();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Form Incomplete",
      subHeader: "Please fill up all input fields",
      buttons: ["OK"]
    });

    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Search by:",
      buttons: [
        {
          text: "Name",
          role: "destructive",
          icon: "people",
          handler: () => {
            this.clearEnabled = false;
            this.searchOption = "name";
          }
        },
        {
          text: "Date",
          icon: "calendar",
          handler: () => {
            this.clearEnabled = false;
            this.searchOption = "date";
          }
        },
        {
          text: "Category",
          icon: "list-box",
          handler: () => {
            this.clearEnabled = false;
            this.searchOption = "type";
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
