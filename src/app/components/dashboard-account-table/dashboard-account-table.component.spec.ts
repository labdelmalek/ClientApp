import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAccountTableComponent } from './dashboard-account-table.component';

describe('DashboardAccountTableComponent', () => {
  let component: DashboardAccountTableComponent;
  let fixture: ComponentFixture<DashboardAccountTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAccountTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAccountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
