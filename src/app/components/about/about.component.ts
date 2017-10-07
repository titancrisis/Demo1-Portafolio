import {Component, OnInit} from '@angular/core';
import {InformacionService} from '../../services/informacion/informacion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {

  constructor(public _is: InformacionService) {

  }
}
