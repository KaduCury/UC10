import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompraCreateComponent } from './compra-create.component';

describe('CompraCreateComponent', () => {
  let component: CompraCreateComponent;
  let fixture: ComponentFixture<CompraCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
