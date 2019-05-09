import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsListPage } from './leads-list.page';

describe('LeadsListPage', () => {
  let component: LeadsListPage;
  let fixture: ComponentFixture<LeadsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
