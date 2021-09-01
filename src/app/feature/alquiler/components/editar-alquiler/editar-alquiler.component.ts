import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlquilerService } from '../../shared/service/alquiler/alquiler.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editar-alquiler',
  templateUrl: './editar-alquiler.component.html',
  styleUrls: ['./editar-alquiler.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EditarAlquilerComponent implements OnInit {

  form: FormGroup;
  id: number;
  abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(
    private formBuilder: FormBuilder,
    protected alquilerService: AlquilerService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
      this.form.patchValue(params);
    });
  }

  save(){
    const alquiler = this.form.value;
    alquiler.id = this.id;
    this.alquilerService.update(this.id, alquiler)
    .subscribe((req) => {
      // tslint:disable-next-line: no-string-literal
      const valor = req['valor'];
      if (valor === 'El local ya fue alquilado' || valor === 'El registro ya existe en el sistema'){
        alert(valor);
      }else {
        alert('Actualizado');
        this.router.navigate(['./alquiler/listar']);
      }
    });
  }

  validar(){
    if (this.form.valid) {
      this.save();
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, ]],
      numero: ['', [Validators.required, Validators.pattern(/^-?(|[0-9]\d*)?$/),
                      Validators.maxLength(10), Validators.minLength(10)]],
      fechaPago: ['YYYY-MM-DD', [Validators.required]],
      estadoPago: ['', [Validators.required]],
      letraLocal: ['', [Validators.required]]
    });
  }

}
