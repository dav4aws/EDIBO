import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchNewComponent } from './fetch-new.component';

describe('FetchNewComponent', () => {
  let component: FetchNewComponent;
  let fixture: ComponentFixture<FetchNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
