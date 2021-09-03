import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TrmService } from './trm.service';
import { HttpService } from 'src/app/core/services/http.service';
import { Trm } from '../../../feature/alquiler/shared/model/trm';

describe('TrmService', () => {
  let httpMock: HttpTestingController;
  let service: TrmService;
  const url = `https://www.datos.gov.co/resource/32sa-8pi3.json?$where=vigenciadesde%20between%272021-08-28 00:00:00%27and%272021-08-28 00:00:00%27`;
  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TrmService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(TrmService);
  });

  it('should be created', () => {
    const alquilerService: TrmService = TestBed.inject(TrmService);
    expect(alquilerService).toBeTruthy();
  });

  it('deberia consultar TRM', () => {
    const dummyData = [new Trm('3834.13', 'COP', '2021-08-28T00:00:00.000', '2021-08-30T00:00:00.000')];
    service = TestBed.inject(TrmService);
    service.getTMR('2021-08-28 00:00:00').subscribe(res => {
      expect(res[0].valor.length).toEqual(7);
      expect(res[0].valor).toEqual('3834.13');
    });
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });
});
