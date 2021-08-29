import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';
import { EditarAlquilerComponent } from './components/editar-alquiler/editar-alquiler.component';
const routes: Routes = [
    {
      path: '',
      component: AlquilerComponent,
      children: [
        {
          path: 'crear',
          component: CrearAlquilerComponent
        },
        {
          path: 'listar',
          component: ListarAlquilerComponent
        },
        {
          path: 'editar/:id/:nombre/:numero/:fechaPago/:estadoPago/:letraLocal',
          component: EditarAlquilerComponent
        }
      ]
    }
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AlquilerRoutingModule { }
