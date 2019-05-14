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

  fetchLeadsList() {
    this.http
      .get("http://localhost:5000/api/leads", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidGFyZ2V0X2RldGFpbF9pZCI6MSwidXNlcm5hbWUiOiJqYW5lc09TIiwiY3JlYXRlZF9hdCI6IjIwMTgtMDEtMThUMTI6MjM6MTUuMDAwWiIsImlhdCI6MTU1NzgyMTI4OCwiZXhwIjoxNTU3OTA3Njg4fQ.V9pS-5fqQBSzQXGkBv9YZWigOqYrK7zJPEL6m7Vsb2E"
        }
      })
      .subscribe(res => {
        this.leadsChanged.next(res);
      });
  }

  constructor(private http: HttpClient) {
    this.fetchLeadsList();
  }
}
