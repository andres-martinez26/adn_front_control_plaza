import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AlquilerService } from './alquiler.service';
import { environment } from 'src/environments/environment';
import { Alquiler } from '../../model/alquiler';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpResponse } from '@angular/common/http';
import { Respuesta } from '@alquiler/shared/model/respuesta';

describe('AlquilerService', () => {

  let httpMock: HttpTestingController;
  let service: AlquilerService;

  const alquiler1: Alquiler = {
    id: 1099371662,
    nombre: 'Andres',
    numero: '3162878186',
    estadoPago: 'cancelado',
    fechaPago: '2021-10-15',
    letraLocal: 'A',
  };

  const alquiler2: Alquiler = {
    id: 1099371662,
    nombre: 'Andres',
    numero: '3162878186',
    estadoPago: 'cancelado',
    fechaPago: '2021-10-15',
    letraLocal: 'B',
  };

  const apiEndpointAlquiler = `${environment.endpoint}/alquiler`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlquilerService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AlquilerService);
  });

  it('should be created', () => {
    const alquilerService: AlquilerService = TestBed.inject(AlquilerService);
    expect(alquilerService).toBeTruthy();
  });

  it('deberia listar un registro', () => {
    service = TestBed.inject(AlquilerService);
    const dummyData = [
      alquiler1,
      alquiler2
    ];

    service.getAll().subscribe(registro => {
      expect(registro.length).toBe(2);
      expect(registro).toEqual(dummyData);
    });
    const req = httpMock.expectOne(apiEndpointAlquiler);
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });

  it('deberia crear un registro', () => {
    const dummyData = alquiler1;
    service.save(dummyData).subscribe((respuesta) => {
      expect(respuesta.mensaje).toEqual('2021-11-15');
    });
    const req = httpMock.expectOne(apiEndpointAlquiler);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<Respuesta>({body: {mensaje : '2021-11-15'}}));
  });

  it('deberia actualizar un registro', () => {
    const dummyData = alquiler1;
    service.update(1099371662, dummyData).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointAlquiler}/1099371662`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un registro', () => {
    service.delete('1099371662').subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointAlquiler}/1099371662`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });

});
