import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public token: string;
  public url: string;

  constructor() {
    this.token = '';
    this.url = 'http://localhost:5000/api';
  }
}
