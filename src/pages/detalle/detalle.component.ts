import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista,ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  idx: number;
  lista: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _listaDeseos: ListaDeseosService,
    public alertCtrl: AlertController
  ) {
    console.log(navParams);
    this.idx = this.navParams.get('idx');
    this.lista = this.navParams.get('lista');
   }

  ngOnInit() { }

  actualizar(item:ListaItem){
    item.completado = !item.completado;

    let todosMarcados = true;

    for (let item of this.lista.items){
      if (!item.completado){
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;

    this._listaDeseos.actualizarData();
  }

  borrarItem(){
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: '¿Quieres eliminar la lista? Si eliminas la lista perderás toda su información',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            //console.log('Agree clicked');
            this._listaDeseos.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
