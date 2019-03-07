import { Component, OnInit } from '@angular/core';
import { VariedadesService } from 'src/app/services/variedades.service';
import { IVariedad } from 'src/app/interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-variedades',
  templateUrl: './variedades.component.html',
  styles: []
})
export class VariedadesComponent implements OnInit {
  variedades: IVariedad[] = [];

  constructor(private _VariedadService: VariedadesService) { }

  ngOnInit() {
    this._VariedadService.getVariedades().subscribe((data) => this.variedades = data);
  }

  deleteVariedad(arg: IVariedad) {
    Swal.fire({
      title: 'Borrar',
      text: `Estas seguro de borrar la variedad ${arg.name}`,
      type: 'warning',
      confirmButtonText: 'Si, Eliminar',
      showCancelButton: true,
    })
      .then((result) => {
        return (!result.value)
          ? undefined
          : this._VariedadService.deleteVariedad(arg.id).subscribe(this.onDeleteSuccess.bind(this), this.onDeleteErr.bind(this));
      });
  }

  onDeleteSuccess(data: IVariedad) {
    Swal.fire({
      title: 'Eliminada',
      text: `La variedad ${data.name} se elimino con exito`,
      type: 'success',
    });

    const i = this.variedades.findIndex((elem) => elem.id === data.id);
    this.variedades.splice(i);
  }

  onDeleteErr(E) {
    console.error(E);

    Swal.fire({
      title: 'Error',
      text: `No es posible realizar esta operacion por el momento, intente de nuevo, mas tarde`,
      type: 'error',
    });
  }
}
