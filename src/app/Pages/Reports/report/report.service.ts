import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  data = new Subject<Object>();
  reports: any = [];
  total: number = 0;
  token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidGFyZ2V0X2RldGFpbF9pZCI6MSwidXNlcm5hbWUiOiJqYW5lc09TIiwiY3JlYXRlZF9hdCI6IjIwMTgtMDEtMTlUMDQ6MjM6MTUuMDAwWiIsImlhdCI6MTU1ODA0MTU4OSwiZXhwIjoxNTU4MTI3OTg5fQ.eRlySCDTsNHb-SErWvbooyqS_nymbbpUwEnHZIZTtDM";
  constructor(private http: HttpClient) { }

  getData() {
    this.http.get(
      'http://localhost:5000/api/reports', { headers: { Authorization: this.token}
    }).subscribe(res => {
      this.data.next(res);
      this.reports = res;
      this.reports.forEach(element => {
        this.total = element.total_rec;
      });
      console.log(this.reports);
    });
  }
  getFilteredData(start, end) {
    this.http.get(
      `http://localhost:5000/api/reports?start=${start}&end=${end}`, { headers: { Authorization: this.token}
    }).subscribe(res => {
      this.data.next(res);
      console.log(res);
    });
  }
  getTotalCalls() {
    return this.total;
  }
}
