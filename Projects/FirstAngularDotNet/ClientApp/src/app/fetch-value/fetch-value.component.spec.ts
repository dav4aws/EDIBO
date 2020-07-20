import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchValueComponent } from './fetch-value.component';

describe('FetchValueComponent', () => {
  let component: FetchValueComponent;
  let fixture: ComponentFixture<FetchValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
