import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFullComponent } from './product-full.component';

describe('ProductFullComponent', () => {
  let component: ProductFullComponent;
  let fixture: ComponentFixture<ProductFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
