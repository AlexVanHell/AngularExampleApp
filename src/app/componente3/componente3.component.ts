import { Component, OnInit } from '@angular/core';
import { Producto } from './productos';
import { ProductosService } from './componente3.service';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css'],
  providers: [ProductosService]
})
export class Componente3Component implements OnInit {

	constructor(private productosService: ProductosService){}

	productos : Producto[];

	ngOnInit() {
		this.productosService.getProductos()
      		.subscribe(productos => this.productos = productos)
	}

	addProduct(producto){
		if(producto.quantity < producto.stock) producto.quantity++;
	}
	removeProduct(producto){
		if(producto.quantity > 0) producto.quantity--;	
	}

	quedan(producto){
		let restan;
		restan = producto.stock - producto.quantity;
		return restan;
	}

	total(){
		let total = 0;
		let suma;
		if(Array.isArray(this.productos)){
			for(let producto of this.productos){
				suma = producto.quantity * producto.price;
				total += suma;
			}
		}
		return total;
	}

	pedido(producto){
		let pedido;
		return `Pediste ${producto.quantity} unidades de ${producto.name}`;
	}

}
