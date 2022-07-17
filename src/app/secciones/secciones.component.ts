import { Component, OnInit } from '@angular/core';
import { FaltantesService } from '../servicios/faltantes.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css'],
})
export class SeccionesComponent implements OnInit {
  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    ordering: true,
  };

  constructor(private faltantesService: FaltantesService) {}

  secciones: any[] = [];

  ngOnInit(): void {
    this.getSecciones();
  }

  getSecciones() {
    console.log(this.faltantesService.getSecciones);
    this.secciones = [];
    console.log(this.secciones);
    this.faltantesService.getSecciones().subscribe((data) => {
      data.forEach((element: any) => {
        this.secciones.push({
          ...element.payload.doc.data(),
        });
        console.table(element.payload.doc.data());
        console.log('entra');
      });
    });
    console.log(this.secciones);
  }
}
