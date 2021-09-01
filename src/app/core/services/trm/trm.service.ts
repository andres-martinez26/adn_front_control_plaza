
import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';

@Injectable()
export class TrmService {

  constructor(
    protected http: HttpService
    ) { }

  getTMR(date: string) {
    return this.http.doGet(`https://www.datos.gov.co/resource/32sa-8pi3.json?$where=vigenciadesde%20between%27${date}%27and%27${date}%27`);
  }
}
