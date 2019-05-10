import { Component, OnInit, Input } from '@angular/core';
import { LeadsClientModel } from '../leads-client.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-leads-info',
  templateUrl: './leads-info.component.html',
  styleUrls: ['./leads-info.component.scss'],
})
export class LeadsInfoComponent implements OnInit {
  @Input() selectedLeadClient: LeadsClientModel;

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    
  }

  onCloseInfo() {
    this.modalCtrl.dismiss();
  }

}
