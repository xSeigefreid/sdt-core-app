import { Injectable } from '@angular/core';
import { LeadsClientModel } from './leads/leads-client.model';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  private _clients: LeadsClientModel[] = [
    {
      id: '1',
      company: 'SDT - Core',
      client: 'Jigo',
      position: 'OJT'
    },
    {
      id: '2',
      company: 'University of Mindanao',
      client: 'Karl',
      position: 'Dad'
    },
    {
      id: '3',
      company: 'Test Company',
      client: 'Toto',
      position: 'CEO'
    },
    {
      id: '4',
      company: 'League of Buses',
      client: 'Jaiam',
      position: 'President'
    },
    {
      id: '5',
      company: 'Capcom',
      client: 'Cris',
      position: 'Director'
    },
    {
      id: '6',
      company: 'Dummy Company',
      client: 'Thes',
      position: 'Kid'
    }
  ];

  get clients() {
    return [...this._clients];
  }

  constructor() {}
}
