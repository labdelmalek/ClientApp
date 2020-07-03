import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvementCmpteComponent } from './mouvement-cmpte.component';

describe('MouvementCmpteComponent', () => {
  let component: MouvementCmpteComponent;
  let fixture: ComponentFixture<MouvementCmpteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouvementCmpteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouvementCmpteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
