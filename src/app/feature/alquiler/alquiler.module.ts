import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AlquilerRoutingModule } from './alquiler-routing-module';
import { CommonModule } from '@angular/common';
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
    SharedModule,
    AlquilerRoutingModule,
    HttpClientModule
  ],
  providers: [
    AlquilerService
  ]
})
export class AlquilerModule { }
