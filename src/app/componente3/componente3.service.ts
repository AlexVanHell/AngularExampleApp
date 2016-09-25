import { Producto } from './productos';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductosService{
    constructor (private http:Http){}

    getProductos(){
        return this.http.get('app/componente3/productosData.json')
            .map(response => <Producto[]> response.json().data)
    }


}