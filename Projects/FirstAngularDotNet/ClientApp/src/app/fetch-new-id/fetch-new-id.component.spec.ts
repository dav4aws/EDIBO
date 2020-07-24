import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchNewIdComponent } from './fetch-new-id.component';

describe('FetchNewIdComponent', () => {
  let component: FetchNewIdComponent;
  let fixture: ComponentFixture<FetchNewIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchNewIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchNewIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
