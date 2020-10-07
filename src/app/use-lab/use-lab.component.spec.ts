import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseLabComponent } from './use-lab.component';

describe('UseLabComponent', () => {
  let component: UseLabComponent;
  let fixture: ComponentFixture<UseLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
