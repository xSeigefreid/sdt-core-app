import { Component, OnInit, Input } from '@angular/core';
import { LeadsClientModel } from './leads-client.model';
import { CategoriesModel } from './categories.model';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.page.html',
  styleUrls: ['./leads.page.scss'],
})
export class LeadsPage implements OnInit {

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


isSearching = false;
date1:Date = null;
date2:Date = null;
categoryInput:string;

  constructor() { }

  ngOnInit() {
  }
  enableSearch(){
    this.isSearching = !this.isSearching;
    this.date1 = null;
    this.date2 = null;
  }
  clearFields(){
    this.date1 = null;
    this.date2 = null;
  }
  search(){
    
    alert(this.date1+"\n"+this.date2+"\n"+this.categoryInput);
    this.enableSearch();
  }

  
}
