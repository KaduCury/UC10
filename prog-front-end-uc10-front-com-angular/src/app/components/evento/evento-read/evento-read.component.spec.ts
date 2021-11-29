import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventoReadComponent } from './evento-read.component';

describe('EventoReadComponent', () => {
  let component: EventoReadComponent;
  let fixture: ComponentFixture<EventoReadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
