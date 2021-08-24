import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AlquilerRoutingModule } from './alquiler-routing-module'; 
import { CommonModule } from '@angular/common';
import { TrmService } from './shared/service/trm.service';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { BorrarAlquilerComponent } from './components/borrar-alquiler/borrar-alquiler.component';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';



@NgModule({
  declarations: [
    AlquilerComponent,
    CrearAlquilerComponent,
    BorrarAlquilerComponent,
    ListarAlquilerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    AlquilerRoutingModule,
    HttpClientModule
  ],
  providers: [TrmService]
})
export class AlquilerModule { }
