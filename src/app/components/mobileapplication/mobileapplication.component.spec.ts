import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileapplicationComponent } from './mobileapplication.component';

describe('MobileapplicationComponent', () => {
  let component: MobileapplicationComponent;
  let fixture: ComponentFixture<MobileapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
