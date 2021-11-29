import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompraTabelaComponent } from './compra-tabela.component';

describe('CompraTabelaComponent', () => {
  let component: CompraTabelaComponent;
  let fixture: ComponentFixture<CompraTabelaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
