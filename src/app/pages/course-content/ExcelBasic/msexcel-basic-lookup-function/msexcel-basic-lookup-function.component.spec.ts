import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsexcelBasicLookupFunctionComponent } from './msexcel-basic-lookup-function.component';

describe('MsexcelBasicLookupFunctionComponent', () => {
  let component: MsexcelBasicLookupFunctionComponent;
  let fixture: ComponentFixture<MsexcelBasicLookupFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsexcelBasicLookupFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsexcelBasicLookupFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
