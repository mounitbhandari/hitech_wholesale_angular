import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelBasicComponent } from './excel-basic.component';

describe('ExcelBasicComponent', () => {
  let component: ExcelBasicComponent;
  let fixture: ComponentFixture<ExcelBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
