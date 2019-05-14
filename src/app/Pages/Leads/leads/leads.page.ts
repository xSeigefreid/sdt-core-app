import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LeadsPopoverComponent } from './leads-popover/leads-popover.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.page.html',
  styleUrls: ['./leads.page.scss'],
})
export class LeadsPage implements OnInit {

  constructor(public popoverController:PopoverController) { }

  ngOnInit() {
    

  }
  async enableSearch(event){
    const popover = await this.popoverController.create({
      component:LeadsPopoverComponent,
      event
    });
    return await popover.present();
  }
}

