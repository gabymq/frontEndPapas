import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-variedades',
  templateUrl: './variedades.component.html',
  styleUrls: []
})
export class VariedadesComponent implements OnInit {
  private editMode = false;
  private defaults = { name: null, description: null };

  @Input()
  set variedad(val: any) {
    if (val && val.description) {
      this.defaults.description = val.description;
    }

    if (val && val.name) {
      this.defaults.name = val.name;
    }

    if (val && (val.name || val.description)) {
      this.editMode = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
