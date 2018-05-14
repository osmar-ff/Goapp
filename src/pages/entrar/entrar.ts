import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovoUsuRioPage } from '../novo-usu-rio/novo-usu-rio';
import { SuaTelaPage } from '../sua-tela/sua-tela';
import { CMeraFrentePage } from '../c-mera-frente/c-mera-frente';
import { GeralPage } from '../geral/geral';
import { QuartoPage } from '../quarto/quarto';
import { SalaPage } from '../sala/sala';

@Component({
  selector: 'page-entrar',
  templateUrl: 'entrar.html'
})
export class EntrarPage {

  constructor(public navCtrl: NavController) {
  }
  goToNovoUsuRio(params){
    if (!params) params = {};
    this.navCtrl.push(NovoUsuRioPage);
  }goToSuaTela(params){
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
