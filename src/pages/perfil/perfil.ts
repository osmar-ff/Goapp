import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EntrarPage } from '../entrar/entrar';
import { NovoUsuRioPage } from '../novo-usu-rio/novo-usu-rio';
import { SuaTelaPage } from '../sua-tela/sua-tela';
import { CMeraFrentePage } from '../c-mera-frente/c-mera-frente';
import { GeralPage } from '../geral/geral';
import { QuartoPage } from '../quarto/quarto';
import { SalaPage } from '../sala/sala';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController) {
  }
  goToEntrar(params){
    if (!params) params = {};
    this.navCtrl.push(EntrarPage);
  }goToNovoUsuRio(params){
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
