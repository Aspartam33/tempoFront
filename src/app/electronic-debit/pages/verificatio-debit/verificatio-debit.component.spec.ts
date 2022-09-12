import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificatioDebitComponent } from './verificatio-debit.component';

describe('VerificatioDebitComponent', () => {
  let component: VerificatioDebitComponent;
  let fixture: ComponentFixture<VerificatioDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificatioDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificatioDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
