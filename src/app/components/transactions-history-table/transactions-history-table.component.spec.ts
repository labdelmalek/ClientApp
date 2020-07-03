import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsHistoryTableComponent } from './transactions-history-table.component';

describe('TransactionsHistoryTableComponent', () => {
  let component: TransactionsHistoryTableComponent;
  let fixture: ComponentFixture<TransactionsHistoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsHistoryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
