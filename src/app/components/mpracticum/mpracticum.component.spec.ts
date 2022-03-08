import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpracticumComponent } from './mpracticum.component';

describe('MpracticumComponent', () => {
  let component: MpracticumComponent;
  let fixture: ComponentFixture<MpracticumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpracticumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpracticumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
