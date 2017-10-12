import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando_productos: boolean = true;

  constructor(private http: Http) {
    this.cargar_productos();
  }

  public cargar_productos() {
    this.cargando_productos = true;
    if (this.productos.length === 0) {
      this.http.get('https://paginaweb-angular.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          // console.log(res.json());
          // setTimeout(() => {
          this.cargando_productos = false;
          this.productos = res.json();
          // }, 1500);
        });
    }
  }

  public cargar_producto(cod: string) {
    return this.http.get(`https://paginaweb-angular.firebaseio.com/productos/${cod}.json`);
  }
}
