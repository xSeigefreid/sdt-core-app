import { Component, OnInit, ViewChild  } from '@angular/core';
import { Profile } from './display.model'; 
import { IonSlides } from '@ionic/angular';
import { ProfileService } from '../profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  
  clientId: string;
  isFetching = false;
  profiles: any=[];
  isLoading = true;
  private profileSubs: Subscription;

  @ViewChild('slides') slider: IonSlides;
  segment = 0;

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

//   profiles: Profile[] = [{
//     id: '1283',
//     fname: 'denver',
//     prefix: 'M',
//     suffix: 'sad',
//     jobTitle: 'Manager',
//     lname: 'alibuyog',
//     address: 'asdh asdas sssssssa',
//     city: 'davao city',
//     state: 'XI',
//     postalcode: '8000',
//     phone: '0989723431',
//     sms: '0937474743',
//     email: 'djkha@gmail.com',
//     web: 'www.sadasd.com.ph'
//   }
// ];
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.fetchProfile();
    this.profileSubs = this.profileService.profileChanged.subscribe(profile => {
      this.profiles = profile;
      console.log(profile);
      this.isLoading = false;
    });
    // this.clientId=this.profileService.fetchProfileId();
    //   this.leadsListSubs = this.profileService.subscribe(leads => {
    //     this.clients = leads;
    //     this.isFetching = false;
    //   });
    //   this.profileService.fetchProfile(this.clientId);
    //   this.isFetching = true;
  }

}
