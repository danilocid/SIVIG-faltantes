import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarfallaComponent } from './agregarfalla/agregarfalla.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FallasComponent } from './fallas/fallas.component';
import { SeccionesComponent } from './secciones/secciones.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Inicio',
    pathMatch: 'full',
  },
  {
    path: 'Inicio',
    component: DashboardComponent,
  },
  {
    path: 'AgregarFalla',
    component: AgregarfallaComponent,
  },
  {
    path: 'Fallas',
    component: FallasComponent,
  },
  {
    path: 'Secciones',
    component: SeccionesComponent,
  },
  { path: '**', redirectTo: 'Inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
