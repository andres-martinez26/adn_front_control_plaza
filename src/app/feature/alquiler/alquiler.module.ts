import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AlquilerRoutingModule } from './alquiler-routing-module'; 
import { CommonModule } from '@angular/common';
import { TrmService } from './shared/service/trm/trm.service';
import { AlquilerService } from './shared/service/alquiler/alquiler.service';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';
import { EditarAlquilerComponent } from './components/editar-alquiler/editar-alquiler.component';



@NgModule({
  declarations: [
    AlquilerComponent,
    CrearAlquilerComponent,
    ListarAlquilerComponent,
    EditarAlquilerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    AlquilerRoutingModule,
    HttpClientModule
  ],
  providers: [
    TrmService,
    AlquilerService
  ]
})
export class AlquilerModule { }
