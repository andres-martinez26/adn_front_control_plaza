import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alquiler } from '../../shared/model/alquiler';
import { AlquilerService } from '../../shared/service/alquiler/alquiler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-alquiler',
  templateUrl: './crear-alquiler.component.html',
  styleUrls: ['./crear-alquiler.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CrearAlquilerComponent implements OnInit {

  form: FormGroup;
  alquiler: Alquiler;
  abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
  constructor(
    private formBuilder: FormBuilder,
    protected alquilerService: AlquilerService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    // Intencionado
  }

  save(){
    const alquiler = this.form.value;
    alquiler.fechaPago = alquiler.fechaPago + ' 00:00:00';
    this.alquilerService.save(alquiler)
    .subscribe(req => {
      console.log(req);
      if (req['valor'] === 'El local ya fue alquilado' || req['valor'] === 'El usuario ya tiene alquilado un local'){
        alert(req['valor']);
      }else {
        alert( 'Guardado: ' + alquiler.nombre + ' debe \npagar el ' + req['valor']);
      }
      this.router.navigate(['./alquiler/listar']);
    });
  }

  validar(){
    if (this.form.valid) {
      this.save();
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, Validators.pattern(/^-?(|[0-9]\d*)?$/), 
                Validators.maxLength(10), Validators.minLength(10)]],
      nombre: ['', [Validators.required,]],
      numero: ['', [Validators.required, Validators.pattern(/^-?(|[0-9]\d*)?$/), 
                Validators.maxLength(10), Validators.minLength(10)]],
      fechaPago: ['YYYY-MM-DD', [Validators.required]],
      estadoPago: ['', [Validators.required]],
      letraLocal: ['', [Validators.required]]
    });
  }

}
