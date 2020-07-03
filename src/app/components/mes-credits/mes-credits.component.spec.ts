import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCreditsComponent } from './mes-credits.component';

describe('MesCreditsComponent', () => {
  let component: MesCreditsComponent;
  let fixture: ComponentFixture<MesCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
