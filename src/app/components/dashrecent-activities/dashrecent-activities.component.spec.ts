import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashrecentActivitiesComponent } from './dashrecent-activities.component';

describe('DashrecentActivitiesComponent', () => {
  let component: DashrecentActivitiesComponent;
  let fixture: ComponentFixture<DashrecentActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashrecentActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashrecentActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
