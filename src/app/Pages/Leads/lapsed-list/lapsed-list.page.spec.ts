import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapsedListPage } from './lapsed-list.page';

describe('LapsedListPage', () => {
  let component: LapsedListPage;
  let fixture: ComponentFixture<LapsedListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapsedListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapsedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
