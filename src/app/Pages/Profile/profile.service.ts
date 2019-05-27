import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { GlobalService } from '../../global.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileChanged = new Subject<Object>();
  profileInfoChanged = new Subject<Object>();
  clientId: string;

  constructor(private http: HttpClient, public token: GlobalService) { }

  fetchProfile() {
    return this.http
      .get(this.token.url + "/profile", {
        headers: {
          Authorization: this.token.token,
        }
      }).subscribe(res => {
        this.profileChanged.next(res);
      });
  }

  fetchProfileId() {
    return this.clientId;
  }
}
