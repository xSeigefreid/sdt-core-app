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

  constructor(public popoverController:PopoverController,private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:5000/api/leads',
      {headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidGFyZ2V0X2RldGFpbF9pZCI6MSwidXNlcm5hbWUiOiJqYW5lc09TIiwiY3JlYXRlZF9hdCI6IjIwMTgtMDEtMThUMTI6MjM6MTUuMDAwWiIsImlhdCI6MTU1NzgwNzcyMiwiZXhwIjoxNTU3ODk0MTIyfQ._y8f85YXlRMnes9A7cXG-8P6Ls6QNia6CTk6hnyV3uM`}}
    )
      .subscribe((res) => {
        console.log(res);
      })

  }
  async enableSearch(event){
    const popover = await this.popoverController.create({
      component:LeadsPopoverComponent,
      event
    });
    return await popover.present();
  }
}

