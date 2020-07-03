import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountActivityChartComponent } from './account-activity-chart.component';

describe('AccountActivityChartComponent', () => {
  let component: AccountActivityChartComponent;
  let fixture: ComponentFixture<AccountActivityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountActivityChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountActivityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
