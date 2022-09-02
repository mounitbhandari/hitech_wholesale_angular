import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelDatabaseComponent } from './excel-database.component';

describe('ExcelDatabaseComponent', () => {
  let component: ExcelDatabaseComponent;
  let fixture: ComponentFixture<ExcelDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
