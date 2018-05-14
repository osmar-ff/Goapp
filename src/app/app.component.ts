import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SuaTelaPage } from '../pages/sua-tela/sua-tela';
import { CMeraFrentePage } from '../pages/c-mera-frente/c-mera-frente';
import { GeralPage } from '../pages/geral/geral';
import { QuartoPage } from '../pages/quarto/quarto';
import { SalaPage } from '../pages/sala/sala';
import { CasaPage } from '../pages/casa/casa';
import { CozinhaPage } from '../pages/cozinha/cozinha';
import { BanheiroPage } from '../pages/banheiro/banheiro';
import { NovoAparelhoPage } from '../pages/novo-aparelho/novo-aparelho';
import { ConfiguraEsPage } from '../pages/configura-es/configura-es';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPage } from '../pages/contato/contato';
import { PerfilPage } from '../pages/perfil/perfil';
import { NovoUsuRioPage } from '../pages/novo-usu-rio/novo-usu-rio';


import { EntrarPage } from '../pages/entrar/entrar';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = EntrarPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToSuaTela(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SuaTelaPage);
  }goToCMeraFrente(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CMeraFrentePage);
  }goToGeral(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GeralPage);
  }goToQuarto(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuartoPage);
  }goToSala(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SalaPage);
  }goToCasa(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CasaPage);
  }goToCozinha(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CozinhaPage);
  }goToBanheiro(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BanheiroPage);
  }goToNovoAparelho(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NovoAparelhoPage);
  }goToConfiguraEs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConfiguraEsPage);
  }goToSobre(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SobrePage);
  }goToContato(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContatoPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }goToEntrar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EntrarPage);
  }goToNovoUsuRio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NovoUsuRioPage);
  }
}
