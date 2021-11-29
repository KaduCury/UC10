import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CasaCreateComponent } from './casa-create.component';

describe('CasaCreateComponent', () => {
  let component: CasaCreateComponent;
  let fixture: ComponentFixture<CasaCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
