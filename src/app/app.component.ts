import { Component } from '@angular/core';
import { WeafomeComponent } from './weafome/weafome.component';
import { Componente3Component } from './componente3/componente3.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Mundo!';
  sub_title = 'Me cagan todos :v';
}
