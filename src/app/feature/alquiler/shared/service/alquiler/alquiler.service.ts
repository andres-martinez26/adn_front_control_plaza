import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Alquiler } from '../../model/alquiler';
import { Respuesta } from '../../model/respuesta';

@Injectable()
export class AlquilerService {

  constructor(protected httpS: HttpService,
              protected http: HttpClient) { }

  public save(alquiler: Alquiler){
    return this.httpS.doPost<Alquiler, Respuesta>(`${environment.endpoint}/alquiler`, alquiler);
  }

  getAll(){
    return this.httpS.doGet<Alquiler[]>(`${environment.endpoint}/alquiler`, this.httpS.optsName('consultar datos'));
  }

  delete(id: string) {
    return this.httpS.doDelete(`${environment.endpoint}/alquiler/${id}`, this.httpS.optsName('eliminar datos'));
  }


  public update(id: number, changes: Partial<Alquiler>){
    return this.http.put(`${environment.endpoint}/alquiler/${id}`, changes);
  }

}
