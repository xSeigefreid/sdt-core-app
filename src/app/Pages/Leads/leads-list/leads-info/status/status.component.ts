import { Component, OnInit, NgModule } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LeadsClientModel } from "../../../leads/leads-client.model";
import { LeadsService } from "../../../leads.service";
import { NavController } from "@ionic/angular";
import { StatusModel } from '../../../leads/status.model';

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"]
})
export class StatusComponent implements OnInit {
  client: LeadsClientModel;
  clients: LeadsClientModel[];
  statuses: StatusModel[] = [];
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
      this.statuses = this.leadsService.statuses.filter(
        l => l.companyid === paramMap.get("leadsid")
      );
    });
  }
}
