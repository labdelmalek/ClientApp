import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationCreditComponent } from './simulation-credit.component';

describe('SimulationCreditComponent', () => {
  let component: SimulationCreditComponent;
  let fixture: ComponentFixture<SimulationCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
