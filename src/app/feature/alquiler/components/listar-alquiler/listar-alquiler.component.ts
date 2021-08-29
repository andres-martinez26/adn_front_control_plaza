import { Component, OnInit } from '@angular/core';
import { AlquilerService } from '../../shared/service/alquiler/alquiler.service';

@Component({
  selector: 'app-listar-alquiler',
  templateUrl: './listar-alquiler.component.html',
  styleUrls: ['./listar-alquiler.component.scss']
})
export class ListarAlquilerComponent implements OnInit {

  constructor(private alquilerService: AlquilerService) { }

  datos = [];
  displayedColumns: string[] = ['id', 'nombre', 'estado', 'numero', 'actions'];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.alquilerService.getAll()
    .subscribe(datos => {
      this.datos = datos;
    });
  }

  delete(id: string){
    this.alquilerService.delete(id)
    .subscribe(() => {
      this.fetchData();
    });
  }
}
