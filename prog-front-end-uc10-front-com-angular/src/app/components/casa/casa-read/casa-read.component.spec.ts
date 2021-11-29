import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CasaReadComponent } from './casa-read.component';

describe('CasaReadComponent', () => {
  let component: CasaReadComponent;
  let fixture: ComponentFixture<CasaReadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
