import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LeadsClientModel } from "../../../leads/leads-client.model";
import { LeadsService } from "../../../leads.service";
import { NavController } from "@ionic/angular";
import { Subscription } from 'rxjs';
import { LeadsInfoPage } from '../leads-info.page';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  clientId:string;
  clients: any=[];
  private leadsListSubs: Subscription;
  isFetching = false;

  constructor(
    private route: ActivatedRoute,
    private leadsService: LeadsService,
    private navController: NavController
  ) {
  }

  ngOnInit() {
   this.clientId=this.leadsService.fetchLeadsId();
      this.leadsListSubs = this.leadsService.leadsInfoChanged.subscribe(leads => {
        this.clients = leads;
        this.isFetching = false;
      });
      this.leadsService.fetchLeadsInfo(this.clientId);
      this.isFetching = true;
  }


  ngOnDestroy(){
    this.leadsListSubs.unsubscribe();
  }
}
