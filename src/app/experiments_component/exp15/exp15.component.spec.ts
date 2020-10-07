import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp15Component } from './exp15.component';

describe('Exp15Component', () => {
  let component: Exp15Component;
  let fixture: ComponentFixture<Exp15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exp15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exp15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
