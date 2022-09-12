import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptChangeComponent } from './receipt-change.component';

describe('ReceiptChangeComponent', () => {
  let component: ReceiptChangeComponent;
  let fixture: ComponentFixture<ReceiptChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
