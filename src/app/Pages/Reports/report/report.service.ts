import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { LoadingController } from "@ionic/angular";
import { GlobalService } from "../../../global.service";

@Injectable({
  providedIn: "root"
})
export class ReportService {
  data = new Subject<Object>();
  reports: any = [];
  total: number = 0;
  summary: any = [];
  positive: any = [];
  negative: any = [];
  noContact: any = [];
  isFetching = false;
  constructor(
    private http: HttpClient,
    private loadingctrl: LoadingController,
    public token: GlobalService
  ) {}

  getData() {
    this.http
      .get(this.token.url + "/reports", {
        headers: { Authorization: this.token.token }
      })
      .subscribe(res => {
        this.reports = res;
        this.data.next(res);
      });
  }
  getFilteredData(start, end) {
    this.isFetching = true;
    this.loadingctrl
      .create({
        keyboardClose: true,
        message: "Generating Data.."
      })
      .then(loadingEl => {
        loadingEl.present().then(() => {
          console.log(this.isFetching);
          this.http
            .get(this.token.url + `/reports?start=${start}&end=${end}`, {
              headers: { Authorization: this.token.token }
            })
            .subscribe(res => {
              this.reports = res;
              this.calculate();
              this.data.next(res);
              this.isFetching = false;
              console.log("oten");
              loadingEl.dismiss();
            });
        });
      });
  }
  calculate() {
    // tslint:disable-next-line: forin
    this.positive = [];
    this.negative = [];
    this.noContact = [];
    for (let row in this.reports) {
      // this.total += (this.reports[row]["cnt"]);
      var element = this.reports[row];
      if (element.type == "positive") {
        this.positive = [...this.positive, element];
        // this.positive.push(element);
      }
      if (element.type == "no contact") {
        this.noContact = [...this.noContact, element];
        // this.noContact.push(element);
      }
      if (element.type == "negative") {
        this.negative = [...this.negative, element];
        // this.negative.push(element);
      }
      this.total = element.total_rec;
    }
    // console.log(this.positive);
    // console.log(this.negative);
    // console.log(this.noContact);
  }
}
