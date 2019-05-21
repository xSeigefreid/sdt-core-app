import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NocontactsPage } from './nocontacts.page';

describe('NocontactsPage', () => {
  let component: NocontactsPage;
  let fixture: ComponentFixture<NocontactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NocontactsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NocontactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
