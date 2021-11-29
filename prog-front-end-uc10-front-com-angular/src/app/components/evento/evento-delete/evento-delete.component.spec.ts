import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventoDeleteComponent } from './evento-delete.component';

describe('EventoDeleteComponent', () => {
  let component: EventoDeleteComponent;
  let fixture: ComponentFixture<EventoDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
