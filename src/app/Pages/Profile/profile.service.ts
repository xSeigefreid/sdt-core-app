import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileChanged = new Subject<Object>();
  profileInfoChanged = new Subject<Object>();
  clientId: string;
  token = 
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidGFyZ2V0X2RldGFpbF9pZCI6MSwidXNlcm5hbWUiOiJqYW5lc09TIiwiY3JlYXRlZF9hdCI6IjIwMTgtMDEtMThUMTI6MjM6MTUuMDAwWiIsImlhdCI6MTU1ODMzMTIyNywiZXhwIjoxNTU4NDE3NjI3fQ.doQAgz3g1zx4M-iPcyNfxbD-CRzQgKJnhZlHvje-SBQ"

  constructor(private http: HttpClient) { }

  fetchProfile() {
    return this.http
      .get("http://localhost:5000/api/profile", {
        headers: {
          Authorization: this.token
        }
      }).subscribe(res => {
        this.profileChanged.next(res);
      });
  }

  fetchProfileId() {
    return this.clientId;
  }
}
