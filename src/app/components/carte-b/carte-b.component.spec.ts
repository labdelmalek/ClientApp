import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteBComponent } from './carte-b.component';

describe('CarteBComponent', () => {
  let component: CarteBComponent;
  let fixture: ComponentFixture<CarteBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
