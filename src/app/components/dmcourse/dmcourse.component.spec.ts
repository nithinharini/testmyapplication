import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMcourseComponent } from './dmcourse.component';

describe('DMcourseComponent', () => {
  let component: DMcourseComponent;
  let fixture: ComponentFixture<DMcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
