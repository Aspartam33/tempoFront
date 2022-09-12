import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptDebitComponent } from './receipt-debit.component';

describe('ReceiptDebitComponent', () => {
  let component: ReceiptDebitComponent;
  let fixture: ComponentFixture<ReceiptDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
