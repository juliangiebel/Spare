import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeedComponent } from './product-feed.component';

describe('ProductFeedComponent', () => {
  let component: ProductFeedComponent;
  let fixture: ComponentFixture<ProductFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
