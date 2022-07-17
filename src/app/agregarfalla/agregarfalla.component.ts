import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregarfalla',
  templateUrl: './agregarfalla.component.html',
  styleUrls: ['./agregarfalla.component.css']
})
export class AgregarfallaComponent implements OnInit {
  crearFalla: FormGroup;
  constructor(private fb: FormBuilder) {
    this.crearFalla = this.fb.group({
      nombre: [''],
      apellido: [''],
      documento: [''],
      salario: ['']
    })
   }

  ngOnInit(): void {
    
  }
  agregarFalla(){

  }

}
