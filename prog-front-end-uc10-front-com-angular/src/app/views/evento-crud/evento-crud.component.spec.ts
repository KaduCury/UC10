import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventoCrudComponent } from './evento-crud.component';

describe('EventoCrudComponent', () => {
  let component: EventoCrudComponent;
  let fixture: ComponentFixture<EventoCrudComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
