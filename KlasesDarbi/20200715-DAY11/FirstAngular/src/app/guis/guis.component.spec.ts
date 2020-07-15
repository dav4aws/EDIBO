import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisComponent } from './guis.component';

describe('GuisComponent', () => {
  let component: GuisComponent;
  let fixture: ComponentFixture<GuisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
