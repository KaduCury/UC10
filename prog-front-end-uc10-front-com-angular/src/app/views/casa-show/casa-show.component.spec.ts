import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CasaShowComponent } from './casa-show.component';

describe('CasaShowComponent', () => {
  let component: CasaShowComponent;
  let fixture: ComponentFixture<CasaShowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
