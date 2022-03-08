import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoscourseComponent } from './ioscourse.component';

describe('IoscourseComponent', () => {
  let component: IoscourseComponent;
  let fixture: ComponentFixture<IoscourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoscourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
