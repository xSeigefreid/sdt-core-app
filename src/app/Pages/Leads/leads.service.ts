import { Injectable } from "@angular/core";
import { LeadsClientModel } from "./leads/leads-client.model";
import { StatusModel } from "./leads/status.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { GlobalService } from "../../global.service";

@Injectable({
  providedIn: "root"
})
export class LeadsService {
  leadsChanged = new Subject<Object>();
  leadsInfoChanged = new Subject<Object>();
  leadsEventsChanged = new Subject<Object>();
  clientId: string;

  fetchLeadsList() {
    this.http
      .get(this.token.url + "/leads", {
        headers: {
          Authorization: this.token.token
        }
      })
      .subscribe(res => {
        this.leadsChanged.next(res);
      });
  }

  fetchLeadsCategory(category) {
    this.http
      .get(this.token.url + `/leads?appointment=${category}`, {
        headers: {
          Authorization: this.token.token
        }
      })
      .subscribe(res => {
        this.leadsChanged.next(res);
      });
  }

  fetchLeadsInfo(leadsID) {
    this.clientId = leadsID;
    this.http
      .get(this.token.url + "/leads/" + leadsID, {
        headers: {
          Authorization: this.token.token
        }
      })
      .subscribe(res => {
        this.leadsInfoChanged.next(res);
      });
  }

  fetchEventsInfo(leadsID) {
    this.clientId = leadsID;
    this.http
      .get(this.token.url + "/leads/" + leadsID + "/events", {
        headers: {
          Authorization: this.token.token
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
        this.token.url +
          `/leads?start=${date1}\&end=${date2}\&search=${search}`,
        {
          headers: {
            Authorization: this.token.token
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

  constructor(private http: HttpClient, public token: GlobalService) {
    this.fetchLeadsList();
  }
}
