import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SuaTelaPage } from '../pages/sua-tela/sua-tela';
import { CasaPage } from '../pages/casa/casa';
import { ConfiguraEsPage } from '../pages/configura-es/configura-es';
import { CMeraFrentePage } from '../pages/c-mera-frente/c-mera-frente';
import { GeralPage } from '../pages/geral/geral';
import { QuartoPage } from '../pages/quarto/quarto';
import { SalaPage } from '../pages/sala/sala';
import { BanheiroPage } from '../pages/banheiro/banheiro';
import { CozinhaPage } from '../pages/cozinha/cozinha';
import { EntrarPage } from '../pages/entrar/entrar';
import { NovoUsuRioPage } from '../pages/novo-usu-rio/novo-usu-rio';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPage } from '../pages/contato/contato';
import { PerfilPage } from '../pages/perfil/perfil';
import { NovoAparelhoPage } from '../pages/novo-aparelho/novo-aparelho';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SuaTelaPage,
    CasaPage,
    ConfiguraEsPage,
    CMeraFrentePage,
    GeralPage,
    QuartoPage,
    SalaPage,
    BanheiroPage,
    CozinhaPage,
    EntrarPage,
    NovoUsuRioPage,
    SobrePage,
    ContatoPage,
    PerfilPage,
    NovoAparelhoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SuaTelaPage,
    CasaPage,
    ConfiguraEsPage,
    CMeraFrentePage,
    GeralPage,
    QuartoPage,
    SalaPage,
    BanheiroPage,
    CozinhaPage,
    EntrarPage,
    NovoUsuRioPage,
    SobrePage,
    ContatoPage,
    PerfilPage,
    NovoAparelhoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}