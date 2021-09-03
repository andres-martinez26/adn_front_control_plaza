import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditarAlquilerComponent } from './editar-alquiler.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AlquilerService } from '../../shared/service/alquiler/alquiler.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Respuesta } from '@alquiler/shared/model/respuesta';

describe('EditarAlquilerComponent', () => {
  let component: EditarAlquilerComponent;
  let fixture: ComponentFixture<EditarAlquilerComponent>;
  let alquilerService: AlquilerService;
  const respuesta: Respuesta = {mensaje: ''};

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAlquilerComponent ],
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
    fixture = TestBed.createComponent(EditarAlquilerComponent);
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
});

