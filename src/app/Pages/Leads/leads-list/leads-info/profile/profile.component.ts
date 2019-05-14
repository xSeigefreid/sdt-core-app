import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LeadsClientModel } from "../../../leads/leads-client.model";
import { LeadsService } from "../../../leads.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  client: LeadsClientModel;
  clients: LeadsClientModel[];

  constructor(
    private route: ActivatedRoute,
    private leadsService: LeadsService,
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
}
