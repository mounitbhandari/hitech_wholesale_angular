import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsexcelGeneralFunctionComponent } from './msexcel-general-function.component';

describe('MsexcelGeneralFunctionComponent', () => {
  let component: MsexcelGeneralFunctionComponent;
  let fixture: ComponentFixture<MsexcelGeneralFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsexcelGeneralFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsexcelGeneralFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
