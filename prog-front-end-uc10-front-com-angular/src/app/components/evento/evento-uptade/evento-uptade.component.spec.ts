import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventoUptadeComponent } from './evento-uptade.component';

describe('EventoUptadeComponent', () => {
  let component: EventoUptadeComponent;
  let fixture: ComponentFixture<EventoUptadeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoUptadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoUptadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
