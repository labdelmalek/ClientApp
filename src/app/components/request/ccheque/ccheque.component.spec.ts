import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CchequeComponent } from './ccheque.component';

describe('CchequeComponent', () => {
  let component: CchequeComponent;
  let fixture: ComponentFixture<CchequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CchequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CchequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
