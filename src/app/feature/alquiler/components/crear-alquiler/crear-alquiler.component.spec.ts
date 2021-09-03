import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrearAlquilerComponent } from './crear-alquiler.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AlquilerService } from '../../shared/service/alquiler/alquiler.service';
import { Respuesta } from '../../shared/model/respuesta';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('CrearAlquilerComponent', () => {
  let component: CrearAlquilerComponent;
  let fixture: ComponentFixture<CrearAlquilerComponent>;
  let alquilerService: AlquilerService;
  const respuesta: Respuesta = {mensaje: ''};

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAlquilerComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [AlquilerService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAlquilerComponent);
    component = fixture.componentInstance;
    alquilerService = TestBed.inject(AlquilerService);
    spyOn(alquilerService, 'save').and.returnValue(
      of(respuesta)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('Registrando un nuevo dato', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls.id.setValue('1099371662');
    component.form.controls.nombre.setValue('test');
    component.form.controls.numero.setValue('3162878186');
    component.form.controls.estadoPago.setValue('test');
    component.form.controls.fechaPago.setValue('2021-11-15');
    component.form.controls.letraLocal.setValue('A');
    expect(component.form.valid).toBeTruthy();

    expect(component.crear());
  });

});
