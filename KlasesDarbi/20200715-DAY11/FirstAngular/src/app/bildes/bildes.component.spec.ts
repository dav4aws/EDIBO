import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BildesComponent } from './bildes.component';

describe('BildesComponent', () => {
  let component: BildesComponent;
  let fixture: ComponentFixture<BildesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BildesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BildesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
