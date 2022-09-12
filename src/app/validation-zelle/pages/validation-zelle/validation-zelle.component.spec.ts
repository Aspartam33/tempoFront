import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationZelleComponent } from './validation-zelle.component';

describe('ValidationZelleComponent', () => {
  let component: ValidationZelleComponent;
  let fixture: ComponentFixture<ValidationZelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationZelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationZelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
