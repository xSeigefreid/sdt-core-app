import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalService } from '../../../global.service';

@Injectable({
  providedIn: "root"
})
export class EventsService {
  events = [];

  constructor(private http: HttpClient, public token: GlobalService) {}

  fetchEvents() {
    this.http
      .get(this.token.url + "/leads", {
        headers: {
          Authorization: this.token.token,
        }
      })
      .subscribe(res => {
        for (let event in res) {
          this.events = [
            ...this.events,
            {
              title: res[event].company,
              desc: res[event].call_result,
              startTime: new Date(
                `${res[event].txn_date.substring(0, 10)} ${res[event].txn_time}`
              ),
              endTime: new Date(
                `${res[event].txn_date.substring(0, 10)} 23:59:59`
              ),
              allday: false
            }
          ];
        }
      });
  }
}
