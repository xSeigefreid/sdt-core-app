import { Component, OnInit, NgModule } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LeadsClientModel } from "../../../leads/leads-client.model";
import { LeadsService } from "../../../leads.service";
import { NavController } from "@ionic/angular";
import { StatusModel } from '../../../leads/status.model';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"]
})
export class StatusComponent implements OnInit {
  clients: any;
  status: any;
  clientId:string;
  private leadsListSubs: Subscription;
  constructor(
    private route: ActivatedRoute,
    private leadsService: LeadsService,
    private navController: NavController
  ) {
  }

  ngOnInit() {
    this.clientId=this.leadsService.fetchLeadsId();
      this.leadsListSubs = this.leadsService.leadsEventsChanged.subscribe(leads => {
        this.status = leads;
      });
      this.leadsService.fetchEventsInfo(this.clientId);

  }

  ngOnDestroy(){
    this.leadsListSubs.unsubscribe();
  }
}
