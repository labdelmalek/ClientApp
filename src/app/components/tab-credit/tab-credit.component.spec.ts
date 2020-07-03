import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCreditComponent } from './tab-credit.component';

describe('TabCreditComponent', () => {
  let component: TabCreditComponent;
  let fixture: ComponentFixture<TabCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
