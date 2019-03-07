import { Component, OnInit } from '@angular/core';
import { VariedadesService } from 'src/app/services/variedades.service';

@Component({
  selector: 'app-create-variedades',
  templateUrl: './create-variedades.component.html',
  styles: []
})
export class CreateVariedadesComponent implements OnInit {

  constructor(private _variedadesServices: VariedadesService) { }

  ngOnInit() {
  }

}
