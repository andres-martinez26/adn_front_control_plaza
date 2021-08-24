import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarAlquilerComponent } from './borrar-alquiler.component';

describe('BorrarAlquilerComponent', () => {
  let component: BorrarAlquilerComponent;
  let fixture: ComponentFixture<BorrarAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarAlquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
