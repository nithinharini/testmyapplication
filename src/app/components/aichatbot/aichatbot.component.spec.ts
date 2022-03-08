import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AIchatbotComponent } from './aichatbot.component';

describe('AIchatbotComponent', () => {
  let component: AIchatbotComponent;
  let fixture: ComponentFixture<AIchatbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AIchatbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AIchatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
