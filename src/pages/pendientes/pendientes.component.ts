import { Component, OnInit } from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.service'

import { NavController } from 'ionic-angular';

import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {
  constructor( public _listaDeseos: ListaDeseosService,
              private navCtrl: NavController) { }

  ngOnInit() { }

  irAgregar(){
    this.navCtrl.push(AgregarComponent);
  }

  verDetalle(lista, idx) {
    this.navCtrl.push( DetalleComponent, {
      lista:lista,
      idx:idx
    });

    /** También se puede poner asi, desde ECMA SCRIPT 6:
     *
     * this.navCtrl.push( DetalleComponent, {
      lista,
      idx
    });
    */
  }
}
