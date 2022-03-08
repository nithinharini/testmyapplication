import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BAcourseComponent } from './bacourse.component';

describe('BAcourseComponent', () => {
  let component: BAcourseComponent;
  let fixture: ComponentFixture<BAcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BAcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BAcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
