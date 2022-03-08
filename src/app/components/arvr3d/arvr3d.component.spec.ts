import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arvr3dComponent } from './arvr3d.component';

describe('Arvr3dComponent', () => {
  let component: Arvr3dComponent;
  let fixture: ComponentFixture<Arvr3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arvr3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Arvr3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
