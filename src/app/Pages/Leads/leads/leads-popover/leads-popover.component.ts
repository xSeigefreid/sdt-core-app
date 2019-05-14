import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CategoriesModel } from '../categories.model';

@Component({
  selector: 'app-leads-popover',
  templateUrl: './leads-popover.component.html',
  styleUrls: ['./leads-popover.component.scss'],
})
export class LeadsPopoverComponent implements OnInit {

  @Input() cat: CategoriesModel[] = [{
    category:'All'
  },{
    category:'Appointment Set'
  },{
    category:'Rescheduled'
  },{
    category:'For follow-up'
  },{
    category:'Close won'
  },{
    category:'Account assign'
  },{
    category:'Account lost'
  },{
    category:'No Budget'
  },{
    category:'No Interest'
  },{
    category:'Sent Proposal'
  },
  ];

searchInput:string;
date1:Date = null;
date2:Date = null;
categoryInput:string;

  constructor(public popoverController:PopoverController) { }

  ngOnInit() {}

  close(){
    this.popoverController.dismiss()
  }
  clearFields(){
    this.date1 = null;
    this.date2 = null;
    this.searchInput=null;
  }
  search(){
    alert(this.date1+"\n"+this.date2+"\n"+this.searchInput);
  }
}
