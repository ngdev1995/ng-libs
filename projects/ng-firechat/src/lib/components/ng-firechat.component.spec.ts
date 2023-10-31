import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFirechatComponent } from './ng-firechat.component';

describe('NgFirechatComponent', () => {
  let component: NgFirechatComponent;
  let fixture: ComponentFixture<NgFirechatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFirechatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFirechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
