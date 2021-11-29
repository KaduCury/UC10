import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompraReadComponent } from './compra-read.component';

describe('CompraReadComponent', () => {
  let component: CompraReadComponent;
  let fixture: ComponentFixture<CompraReadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
