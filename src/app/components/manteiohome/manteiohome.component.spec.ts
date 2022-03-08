import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteiohomeComponent } from './manteiohome.component';

describe('ManteiohomeComponent', () => {
  let component: ManteiohomeComponent;
  let fixture: ComponentFixture<ManteiohomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManteiohomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManteiohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
