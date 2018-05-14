import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeralPage } from '../geral/geral';
import { QuartoPage } from '../quarto/quarto';
import { CozinhaPage } from '../cozinha/cozinha';
import { BanheiroPage } from '../banheiro/banheiro';
import { NovoAparelhoPage } from '../novo-aparelho/novo-aparelho';
import { SalaPage } from '../sala/sala';

@Component({
  selector: 'page-casa',
  templateUrl: 'casa.html'
})
export class CasaPage {

  constructor(public navCtrl: NavController) {
  }
  goToGeral(params){
    if (!params) params = {};
    this.navCtrl.push(GeralPage);
  }goToQuarto(params){
    if (!params) params = {};
    this.navCtrl.push(QuartoPage);
  }goToCozinha(params){
    if (!params) params = {};
    this.navCtrl.push(CozinhaPage);
  }goToBanheiro(params){
    if (!params) params = {};
    this.navCtrl.push(BanheiroPage);
  }goToNovoAparelho(params){
    if (!params) params = {};
    this.navCtrl.push(NovoAparelhoPage);
  }goToSala(params){
    if (!params) params = {};
    this.navCtrl.push(SalaPage);
  }
}
