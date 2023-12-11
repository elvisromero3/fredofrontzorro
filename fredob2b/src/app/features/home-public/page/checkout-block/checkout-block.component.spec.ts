import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutBlockComponent } from './checkout-block.component';

describe('CheckoutBlockComponent', () => {
  let component: CheckoutBlockComponent;
  let fixture: ComponentFixture<CheckoutBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
