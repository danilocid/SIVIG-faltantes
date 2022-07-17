import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarfallaComponent } from './agregarfalla.component';

describe('AgregarfallaComponent', () => {
  let component: AgregarfallaComponent;
  let fixture: ComponentFixture<AgregarfallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarfallaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarfallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
