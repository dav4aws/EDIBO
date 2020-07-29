import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGetIdComponent } from './product-get-id.component';

describe('ProductGetIdComponent', () => {
  let component: ProductGetIdComponent;
  let fixture: ComponentFixture<ProductGetIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGetIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
