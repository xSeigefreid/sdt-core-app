import { Injectable } from "@angular/core";
import { LeadsClientModel } from "./leads/leads-client.model";
import { StatusModel } from "./leads/status.model";

@Injectable({
  providedIn: "root"
})
export class LeadsService {
  private _clients: LeadsClientModel[] = [
    {
      id: "1",
      company: "SDT - Core",
      address: "74 Liberty Avenue, Anaheim, CA, 92804, US",
      client: "Jigo",
      position: "OJT",
      phone: "714.527.4416",
      mobile: "7148736325",
      email: "jigo@sdtcore.com",
      website: "jigo.com",
      empsize: "11 - 50",
      revenue: "1M - 10M",
      pcusers: "11 - 50",
      description: "Landscape Counseling & Planning"
    },
    {
      id: "2",
      company: "University of Mindanao",
      address: "74 Liberty Avenue, Anaheim, CA, 92804, US",
      client: "Karl",
      position: "Dad",
      phone: "714.527.4416",
      mobile: "7148736325",
      email: "jigo@sdtcore.com",
      website: "jigo.com",
      empsize: "11 - 50",
      revenue: "1M - 10M",
      pcusers: "11 - 50",
      description: "Landscape Counseling & Planning"
    },
    {
      id: "3",
      company: "Test Company",
      address: "74 Liberty Avenue, Anaheim, CA, 92804, US",
      client: "Toto",
      position: "CEO",
      phone: "714.527.4416",
      mobile: "7148736325",
      email: "jigo@sdtcore.com",
      website: "jigo.com",
      empsize: "11 - 50",
      revenue: "1M - 10M",
      pcusers: "11 - 50",
      description: "Landscape Counseling & Planning"
    },
    {
      id: "4",
      company: "League of Buses",
      address: "74 Liberty Avenue, Anaheim, CA, 92804, US",
      client: "Jaiam",
      position: "President",
      phone: "714.527.4416",
      mobile: "7148736325",
      email: "jigo@sdtcore.com",
      website: "jigo.com",
      empsize: "11 - 50",
      revenue: "1M - 10M",
      pcusers: "11 - 50",
      description: "Landscape Counseling & Planning"
    },
    {
      id: "5",
      company: "Capcom",
      address: "74 Liberty Avenue, Anaheim, CA, 92804, US",
      client: "Cris",
      position: "Director",
      phone: "714.527.4416",
      mobile: "7148736325",
      email: "jigo@sdtcore.com",
      website: "jigo.com",
      empsize: "11 - 50",
      revenue: "1M - 10M",
      pcusers: "11 - 50",
      description: "Landscape Counseling & Planning"
    },
    {
      id: "6",
      company: "Dummy Company",
      address: "74 Liberty Avenue, Anaheim, CA, 92804, US",
      client: "Thes",
      position: "Kid",
      phone: "714.527.4416",
      mobile: "7148736325",
      email: "jigo@sdtcore.com",
      website: "jigo.com",
      empsize: "11 - 50",
      revenue: "1M - 10M",
      pcusers: "11 - 50",
      description: "Landscape Counseling & Planning"
    }
  ];

  private _statuses: StatusModel[] = [
    {
      id: "1",
      companyid: "1",
      category: "Rescheduled",
      eventdate: "May 09, 2019 01:01 am",
      dateupdated: "July 23, 2018 05:13 am",
      note: "test1"
    },
    {
      id: "2",
      companyid: "1",
      category: "Appointment Set",
      eventdate: "May 09, 2019 01:01 am",
      dateupdated: "July 23, 2018 05:13 am",
      note: "test2"
    },
    {
      id: "3",
      companyid: "2",
      category: "Rescheduled",
      eventdate: "May 09, 2019 01:01 am",
      dateupdated: "July 23, 2018 05:13 am",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec volutpat metus. Morbi consectetur egestas ipsum, ac tincidunt urna venenatis pellentesque. Integer quam nisl, auctor nec risus quis, sollicitudin fermentum tortor. Pellentesque commodo vel enim eget auctor. Suspendisse aliquam, tellus sed commodo dictum, nibh dolor auctor erat, quis faucibus sapien dolor ut augue. In ullamcorper tincidunt nibh eget dignissim. Vivamus feugiat ipsum quis magna elementum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor nisl lectus, sed pulvinar metus scelerisque eu. Donec varius urna sed diam egestas cursus. Donec fringilla lectus non dolor suscipit, ac laoreet ligula hendrerit. Integer hendrerit finibus sem, ut tincidunt purus facilisis et. Nunc ut augue neque. Sed vestibulum nisl ut augue viverra vestibulum. Nam varius ac justo non pellentesque. Nam elementum, eros ac dictum pharetra, est est tempor risus, quis lacinia augue quam sed nulla. Mauris accumsan urna non malesuada congue. Etiam nec odio sed risus rutrum elementum non ut eros. Morbi convallis consectetur gravida. Pellentesque velit ligula, pharetra sit amet quam eget, porta blandit sapien. Nam eros augue, rhoncus sit amet sollicitudin non, consequat in purus. Quisque et turpis in dolor convallis accumsan vel vel nisi. Sed finibus bibendum convallis. Curabitur erat erat, porta at maximus eget, euismod vitae nibh. Nunc convallis scelerisque rhoncus."
    }
  ];

  get clients() {
    return [...this._clients];
  }

  get statuses(){
    return [...this._statuses];
  }

  constructor() {}
}
