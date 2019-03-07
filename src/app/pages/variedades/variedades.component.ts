import { Component, OnInit } from '@angular/core';
import { VariedadesService } from 'src/app/services/variedades.service';
import { IVariedad } from 'src/app/interface';

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
}
