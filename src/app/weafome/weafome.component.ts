import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumnos';
import { ALUMNOS } from './mocks';

@Component({
  selector: 'app-weafome',
  templateUrl: './weafome.component.html',
  styleUrls: ['./weafome.component.css']
})
export class WeafomeComponent implements OnInit {
	title_3 = 'WeaFome works';
	alumnos : Alumno[];

	ngOnInit() {
		this.alumnos = ALUMNOS;
	}

	addFalta(alumno){
		if(alumno.faltas < 10) alumno.faltas++;
	}
	removeFalta(alumno){
		if(alumno.faltas > 0){
			alumno.faltas--;
		}	
	}

	totalFaltas(alumno){
		return alumno.faltas;
	}

}
