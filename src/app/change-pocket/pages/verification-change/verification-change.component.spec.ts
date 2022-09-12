import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationChangeComponent } from './verification-change.component';

describe('VerificationChangeComponent', () => {
  let component: VerificationChangeComponent;
  let fixture: ComponentFixture<VerificationChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
