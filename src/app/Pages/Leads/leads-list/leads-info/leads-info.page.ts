import { Component, OnInit } from "@angular/core";
import { LeadsClientModel } from "../../leads/leads-client.model";
import { ModalController, NavController } from "@ionic/angular";
import { LeadsService } from "../../leads.service";
import { ActivatedRoute } from "@angular/router";
import { SegmentChangeEventDetail } from "@ionic/core";
import { AddStatusComponent } from './add-status/add-status.component';

@Component({
  selector: "app-leads-info",
  templateUrl: "./leads-info.page.html",
  styleUrls: ["./leads-info.page.scss"]
})
export class LeadsInfoPage implements OnInit {
  clients: LeadsClientModel[];
  client: LeadsClientModel;
  choice: string = "profile";

  constructor(
    private modalCtrl: ModalController,
    private leadsService: LeadsService,
    private route: ActivatedRoute,
    private navController: NavController
  ) {
    this.clients = leadsService.clients;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has("leadsid")) {
        this.navController.navigateBack("/leads/tabs/leads");
        return;
      }
      this.client = this.leadsService.clients.find(
        l => l.id === paramMap.get("leadsid")
      );
    });
  }

  segmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
    this.choice = event.detail.value;
  }

  gotostatusmodal() {
    this.modalCtrl.create({
      component:AddStatusComponent
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    });
  }
}


