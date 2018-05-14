import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SobrePage } from '../sobre/sobre';
import { ContatoPage } from '../contato/contato';

@Component({
  selector: 'page-configura-es',
  templateUrl: 'configura-es.html'
})
export class ConfiguraEsPage {

  constructor(public navCtrl: NavController) {
  }
  goToSobre(params){
    if (!params) params = {};
    this.navCtrl.push(SobrePage);
  }goToContato(params){
    if (!params) params = {};
    this.navCtrl.push(ContatoPage);
  }
}
