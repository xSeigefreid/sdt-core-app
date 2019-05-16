import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  events = [];

  constructor(private http: HttpClient) {}

  fetchEvents() {
    this.http
      .get("http://localhost:5000/api/leads", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidGFyZ2V0X2RldGFpbF9pZCI6MSwidXNlcm5hbWUiOiJqYW5lc09TIiwiY3JlYXRlZF9hdCI6IjIwMTgtMDEtMThUMTI6MjM6MTUuMDAwWiIsImlhdCI6MTU1Nzk4MzIyMSwiZXhwIjoxNTU4MDY5NjIxfQ.n78DbjQe-JTf7zZP0fRRDbQMuIDfNcn1Q7qHLL9bZ3A"
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
