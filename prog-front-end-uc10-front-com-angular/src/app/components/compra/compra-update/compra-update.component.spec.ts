import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompraUpdateComponent } from './compra-update.component';

describe('CompraUpdateComponent', () => {
  let component: CompraUpdateComponent;
  let fixture: ComponentFixture<CompraUpdateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
