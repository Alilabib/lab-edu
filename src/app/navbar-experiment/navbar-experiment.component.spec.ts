import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarExperimentComponent } from './navbar-experiment.component';

describe('NavbarExperimentComponent', () => {
  let component: NavbarExperimentComponent;
  let fixture: ComponentFixture<NavbarExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarExperimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
