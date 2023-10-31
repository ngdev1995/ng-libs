import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFireChatWidgetComponent } from './widget.component';

describe('NgFireChatWidgetComponent', () => {
  let component: NgFireChatWidgetComponent;
  let fixture: ComponentFixture<NgFireChatWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFireChatWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFireChatWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
