import { Component } from '@angular/core';
import packageInfo from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sivig_gestion_faltantes';
  public version = packageInfo.version;
}
