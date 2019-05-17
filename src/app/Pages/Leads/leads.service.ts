import { Injectable } from "@angular/core";
import { LeadsClientModel } from "./leads/leads-client.model";
import { StatusModel } from "./leads/status.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LeadsService {
  leadsChanged = new Subject<Object>();
  leadsInfoChanged = new Subject<Object>();
  leadsEventsChanged = new Subject<Object>();
  clientId: string;
  token: string =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidGFyZ2V0X2RldGFpbF9pZCI6MSwidXNlcm5hbWUiOiJqYW5lc09TIiwiY3JlYXRlZF9hdCI6IjIwMTgtMDEtMThUMTI6MjM6MTUuMDAwWiIsImlhdCI6MTU1ODA2OTQ4MSwiZXhwIjoxNTU4MTU1ODgxfQ.cMVCBn70sUpx7DtRnqX6zA2_wSoNRdlQ9EsBaw7ayGY";

  fetchLeadsList() {
    this.http
      .get("http://localhost:5000/api/leads", {
        headers: {
          Authorization: this.token
        }
      })
      .subscribe(res => {
        this.leadsChanged.next(res);
      });
  }

  fetchLeadsCategory(category) {
    this.http
      .get(`http://localhost:5000/api/leads?appointment=${category}`, {
        headers: {
          Authorization: this.token
        }
      })
      .subscribe(res => {
        this.leadsChanged.next(res);
      });
  }

  fetchLeadsInfo(leadsID) {
    this.clientId = leadsID;
    this.http
      .get("http://localhost:5000/api/leads/" + leadsID, {
        headers: {
          Authorization: this.token
        }
      })
      .subscribe(res => {
        this.leadsInfoChanged.next(res);
      });
  }

  fetchEventsInfo(leadsID) {
    this.clientId = leadsID;
    this.http
      .get("http://localhost:5000/api/leads/" + leadsID + "/events", {
        headers: {
          Authorization: this.token
        }
      })
      .subscribe(res => {
        this.leadsEventsChanged.next(res);
      });
  }

  searchLeadsList(date1: string, date2: string, search: string) {
    if (search == null) {
      search = "";
    }
    this.http
      .get(
        `http://localhost:5000/api/leads?start=${date1}\&end=${date2}\&search=${search}`,
        {
          headers: {
            Authorization: this.token
          }
        }
      )
      .subscribe(res => {
        this.leadsChanged.next(res);
      });
  }

  fetchLeadsId() {
    return this.clientId;
  }

  constructor(private http: HttpClient) {
    this.fetchLeadsList();
  }
}
