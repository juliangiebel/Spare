import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsViewComponent } from './product-details-view.component';

describe('ProductDetailsViewComponent', () => {
  let component: ProductDetailsViewComponent;
  let fixture: ComponentFixture<ProductDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
