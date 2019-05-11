import { Component, OnInit, Input } from "@angular/core";
import { LeadsClientModel } from "../leads/leads-client.model";
import { ModalController, NavController } from "@ionic/angular";
import { LeadsService } from "../leads.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-leads-list",
  templateUrl: "./leads-list.page.html",
  styleUrls: ["./leads-list.page.scss"]
})
export class LeadsListPage implements OnInit {
  clients: LeadsClientModel[];
  constructor(
    private modalCtrl: ModalController,
    private leadsService: LeadsService,
    private route: ActivatedRoute,
    private navController: NavController
  ) {
    this.clients = leadsService.clients;
  }
  client: LeadsClientModel;

  // onLeadsInfoPlace(name: string) {
  //   this.client = { ...this.clients.find(l => l.client === name) };
  //   this.modalCtrl
  //     .create({
  //       component: LeadsInfoComponent,
  //       componentProps: { selectedLeadClient: this.client }
  //     })
  //     .then(modalEl => {
  //       modalEl.present();
  //     });
  // }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      // if (!paramMap.has("leadsid")) {
      //   this.navController.navigateBack("/leads/tabs/leads");
      //   return;
      // }
      this.client = this.leadsService.clients.find(
        l => l.id === paramMap.get("leadsid")
      );
    });
  }
}
