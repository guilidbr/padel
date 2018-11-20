import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FeedPage } from '../pages/feed/feed';
import { MinhasReservasPage } from '../pages/minhas-reservas/minhas-reservas';
import { QuadrasPrXimasPage } from '../pages/quadras-pr-ximas/quadras-pr-ximas';
import { MeuPerfilPage } from '../pages/meu-perfil/meu-perfil';
import { MenuPage } from '../pages/menu/menu';
import { ConfiguraEsPage } from '../pages/configura-es/configura-es';
import { AmigosPage } from '../pages/amigos/amigos';
import { RankignPage } from '../pages/rankign/rankign';
import { SobrePage } from '../pages/sobre/sobre';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FeedPage,
    MinhasReservasPage,
    QuadrasPrXimasPage,
    MeuPerfilPage,
    MenuPage,
    ConfiguraEsPage,
    AmigosPage,
    RankignPage,
    SobrePage,
    TabsControllerPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedPage,
    MinhasReservasPage,
    QuadrasPrXimasPage,
    MeuPerfilPage,
    MenuPage,
    ConfiguraEsPage,
    AmigosPage,
    RankignPage,
    SobrePage,
    TabsControllerPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}