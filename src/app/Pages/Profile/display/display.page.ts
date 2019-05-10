import { Component, OnInit, ViewChild  } from '@angular/core';
import { Profile } from './display.model'; 
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  
  @ViewChild('slides') slider: IonSlides;
  segment = 0;

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  profiles: Profile[] = [{
    id: '1283',
    fname: 'denver',
    mname: 'P',
    gender: 'M',
    suffix: 'sad',
    job: 'Manager',
    lname: 'alibuyog',
    address: 'asdh asdas sssssssa',
    city: 'davao city',
    state: 'XI',
    postalcode: '8000',
    phone: '0989723431',
    sms: '0937474743',
    email: 'djkha@gmail.com',
    web: 'www.sadasd.com.ph'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
