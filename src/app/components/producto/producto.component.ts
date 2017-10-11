import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(parametros => {
      console.log(parametros);
      console.log(parametros['id']);
    });
  }
}
