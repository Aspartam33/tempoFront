import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicDebitComponent } from './electronic-debit.component';

describe('ElectronicDebitComponent', () => {
  let component: ElectronicDebitComponent;
  let fixture: ComponentFixture<ElectronicDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
