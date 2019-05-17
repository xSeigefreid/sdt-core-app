import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  data = new Subject<Object>();
  reports: any = [];
  call_results: any = [];
  total: number = 0;
  totalCalls: any = 0;
  pos: number = 0;
  neg: number = 0;
  summary: any = [];
  positive: any = [];
  negative: any = [];
  noContact: any = [];
  token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidGFyZ2V0X2RldGFpbF9pZCI6MSwidXNlcm5hbWUiOiJqYW5lc09TIiwiY3JlYXRlZF9hdCI6IjIwMTgtMDEtMTlUMDQ6MjM6MTUuMDAwWiIsImlhdCI6MTU1ODA0MTU4OSwiZXhwIjoxNTU4MTI3OTg5fQ.eRlySCDTsNHb-SErWvbooyqS_nymbbpUwEnHZIZTtDM";
  constructor(private http: HttpClient) { }

  getData() {
    this.http.get(
      'http://localhost:5000/api/reports', { headers: { Authorization: this.token}
    }).subscribe(res => {
      this.reports = res;
      this.data.next(res);
    });
    this.http.get(
      'http://localhost:5000/api/calls', { headers: { Authorization: this.token}
    }).subscribe(res => {
      this.call_results = res;
    });
  }
  getFilteredData(start, end) {
    this.http.get(
      `http://localhost:5000/api/reports?start=${start}&end=${end}`, { headers: { Authorization: this.token}
    }).subscribe(res => {
      this.reports = res;
      this.data.next(res);
    });
  }
  calculate() {
    for (let row in this.reports) {
        // this.total += (this.reports[row]["cnt"]);
        var element = this.reports[row];
        if (element.type=="positive") {
          this.positive.push(element);
        }
        if (element.type=="no contact") {
          this.noContact.push(element);
        }
        if (element.type=="negative") {
          this.negative.push(element);
        }
        this.total=element.total_rec;
        // if(element.cnt){
        //   this.totalCalls += element.cnt;
        // }
        
        // if(element.type=="positive"){
        //   this.pos += element.cnt;
        // }
        // if(element.type=="no contact"){
        //   this.noContact += element.cnt;
        // }
        // if(element.type=="negative"){
        //   this.neg += element.cnt;
        // }
    }
  }
}
