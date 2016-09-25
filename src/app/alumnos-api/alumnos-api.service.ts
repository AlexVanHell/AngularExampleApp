import { Alumno } from './alumnos';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlumnosService{
	constructor(private http: Http) {}

	getAlumnos(){
		return this.http.get(`http://vijusamexico.net/alumnos/`)
			.map( response => <Alumno[]> response.json() )
	}

}