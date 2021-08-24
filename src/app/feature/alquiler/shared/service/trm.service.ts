
import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class TrmService {

  constructor(
    protected http: HttpService
    ) { }
  getTMR() {
    let date =  new Date();
    let dateTime = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+'T00:00:00';
    return this.http.doGet('https://www.datos.gov.co/resource/32sa-8pi3.json?vigenciadesde='+ dateTime);
  }
}
