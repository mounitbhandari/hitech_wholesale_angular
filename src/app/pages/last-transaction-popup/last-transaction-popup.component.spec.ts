import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTransactionPopupComponent } from './last-transaction-popup.component';

describe('LastTransactionPopupComponent', () => {
  let component: LastTransactionPopupComponent;
  let fixture: ComponentFixture<LastTransactionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastTransactionPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTransactionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
