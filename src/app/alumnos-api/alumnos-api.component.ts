import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumnos';
import { AlumnosService } from './alumnos-api.service'

@Component({
  selector: 'app-alumnos-api',
  templateUrl: './alumnos-api.component.html',
  styleUrls: ['./alumnos-api.component.css'],
  providers: [AlumnosService]
})
export class AlumnosApiComponent implements OnInit {

	alumnos: Alumno[];

	constructor(private alumnosService: AlumnosService){}

	ngOnInit() {
		this.alumnosService.getAlumnos()
      		.subscribe(alumnos => this.alumnos = alumnos)
	}

}
