import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventoCreateComponent } from './evento-create.component';

describe('EventoCreateComponent', () => {
  let component: EventoCreateComponent;
  let fixture: ComponentFixture<EventoCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
