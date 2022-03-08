import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsafehomeComponent } from './msafehome.component';

describe('MsafehomeComponent', () => {
  let component: MsafehomeComponent;
  let fixture: ComponentFixture<MsafehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsafehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsafehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
