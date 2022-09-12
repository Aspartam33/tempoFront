import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptZelleComponent } from './recipt-zelle.component';

describe('ReciptZelleComponent', () => {
  let component: ReciptZelleComponent;
  let fixture: ComponentFixture<ReciptZelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciptZelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptZelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
