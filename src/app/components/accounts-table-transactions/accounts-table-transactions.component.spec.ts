import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsTableTransactionsComponent } from './accounts-table-transactions.component';

describe('AccountsTableTransactionsComponent', () => {
  let component: AccountsTableTransactionsComponent;
  let fixture: ComponentFixture<AccountsTableTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsTableTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsTableTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
