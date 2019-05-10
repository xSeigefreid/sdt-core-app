import { Component, OnInit, Input } from "@angular/core";
import { LeadsClientModel } from "../leads/leads-client.model";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-leads-list",
  templateUrl: "./leads-list.page.html",
  styleUrls: ["./leads-list.page.scss"]
})
export class LeadsListPage implements OnInit {
  @Input() clients: LeadsClientModel[] = [
    {
      id: 1,
      company: "SDT - Core",
      client: "Jigo",
      position: "OJT"
    },
    {
      id: 2,
      company: "University of Mindanao",
      client: "Karl",
      position: "Dad"
    },
    {
      id: 3,
      company: "Test Company",
      client: "Toto",
      position: "CEO"
    },
    {
      id: 4,
      company: "League of Buses",
      client: "Jaiam",
      position: "President"
    },
    {
      id: 5,
      company: "Capcom",
      client: "Cris",
      position: "Director"
    },
    {
      id: 6,
      company: "Dummy Company",
      client: "Thes",
      position: "Kid"
    }
  ];

  constructor(private modalCtrl: ModalController) {}
  client: LeadsClientModel;

  onLeadsInfoPlace(name: string) {
    this.client = { ...this.clients.find(l => l.client === name) };
    this.modalCtrl
      .create({
        component: LeadsInfoComponent,
        componentProps: { selectedLeadClient: this.client }
      })
      .then(modalEl => {
        modalEl.present();
      });
  }

  ngOnInit() {}
}
