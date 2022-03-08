import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdesigningComponent } from './webdesigning.component';

describe('WebdesigningComponent', () => {
  let component: WebdesigningComponent;
  let fixture: ComponentFixture<WebdesigningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebdesigningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
