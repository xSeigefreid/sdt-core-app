import { Component, OnInit, Input } from "@angular/core";
import { LeadsClientModel } from "../leads/leads-client.model";
import { ModalController, NavController } from "@ionic/angular";
import { LeadsService } from "../leads.service";
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-leads-list",
  templateUrl: "./leads-list.page.html",
  styleUrls: ["./leads-list.page.scss"]
})
export class LeadsListPage implements OnInit {
  clients: any;
  constructor(private http: HttpClient, private leadsService: LeadsService) {}
  client: LeadsClientModel;
  private leadsListSubs: Subscription;
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
    
    this.leadsListSubs = this.leadsService.leadsChanged.subscribe(leads => {
      this.clients = leads;
    });
    this.leadsService.fetchLeadsList();
  }

  ngOnDestroy(){
    this.leadsListSubs.unsubscribe();
  }
}
