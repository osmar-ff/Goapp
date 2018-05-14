import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CMeraFrentePage } from '../c-mera-frente/c-mera-frente';
import { GeralPage } from '../geral/geral';
import { QuartoPage } from '../quarto/quarto';
import { SalaPage } from '../sala/sala';

@Component({
  selector: 'page-sua-tela',
  templateUrl: 'sua-tela.html'
})
export class SuaTelaPage {

  constructor(public navCtrl: NavController) {
  }
  goToCMeraFrente(params){
    if (!params) params = {};
    this.navCtrl.push(CMeraFrentePage);
  }goToGeral(params){
    if (!params) params = {};
    this.navCtrl.push(GeralPage);
  }goToQuarto(params){
    if (!params) params = {};
    this.navCtrl.push(QuartoPage);
  }goToSala(params){
    if (!params) params = {};
    this.navCtrl.push(SalaPage);
  }
}
