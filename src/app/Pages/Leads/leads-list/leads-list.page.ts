import { Component, OnInit, Input } from '@angular/core';
import { LeadsClientModel } from '../leads/leads-client.model';
import { ModalController } from '@ionic/angular';
import { LeadsInfoComponent } from '../leads/leads-info/leads-info.component';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.page.html',
  styleUrls: ['./leads-list.page.scss']
})
export class LeadsListPage implements OnInit {
  @Input() clients: LeadsClientModel[] = [
    {
      company: 'SDT - Core',
      client: 'Jigo',
      position: 'OJT'
    },
    {
      company: 'University of Mindanao',
      client: 'Karl',
      position: 'Dad'
    },
    {
      company: 'Test Company',
      client: 'Toto',
      position: 'CEO'
    },
    {
      company: 'League of Buses',
      client: 'Jaiam',
      position: 'President'
    },
    {
      company: 'Capcom',
      client: 'Cris',
      position: 'Director'
    },
    {
      company: 'Dummy Company',
      client: 'Thes',
      position: 'Kid'
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
