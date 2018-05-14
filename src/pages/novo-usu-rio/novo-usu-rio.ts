import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuaTelaPage } from '../sua-tela/sua-tela';
import { CMeraFrentePage } from '../c-mera-frente/c-mera-frente';
import { GeralPage } from '../geral/geral';
import { QuartoPage } from '../quarto/quarto';
import { SalaPage } from '../sala/sala';

@Component({
  selector: 'page-novo-usu-rio',
  templateUrl: 'novo-usu-rio.html'
})
export class NovoUsuRioPage {

  constructor(public navCtrl: NavController) {
  }
  goToSuaTela(params){
    if (!params) params = {};
    this.navCtrl.push(SuaTelaPage);
  }goToCMeraFrente(params){
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
