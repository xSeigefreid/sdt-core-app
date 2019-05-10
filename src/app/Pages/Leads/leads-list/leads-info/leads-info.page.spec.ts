import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsInfoPage } from './leads-info.page';

describe('LeadsInfoPage', () => {
  let component: LeadsInfoPage;
  let fixture: ComponentFixture<LeadsInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
