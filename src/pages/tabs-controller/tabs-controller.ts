import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeuPerfilPage } from '../meu-perfil/meu-perfil';
import { MenuPage } from '../menu/menu';
import { ConfiguraEsPage } from '../configura-es/configura-es';
import { AmigosPage } from '../amigos/amigos';
import { RankignPage } from '../rankign/rankign';
import { SobrePage } from '../sobre/sobre';
import { FeedPage } from '../feed/feed';
import { MinhasReservasPage } from '../minhas-reservas/minhas-reservas';
import { QuadrasPrXimasPage } from '../quadras-pr-ximas/quadras-pr-ximas';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FeedPage;
  tab2Root: any = MinhasReservasPage;
  tab3Root: any = QuadrasPrXimasPage;
  tab4Root: any = MeuPerfilPage;
  tab5Root: any = MenuPage;
  constructor(public navCtrl: NavController) {
  }
  goToMeuPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(MeuPerfilPage);
  }goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }goToConfiguraEs(params){
    if (!params) params = {};
    this.navCtrl.push(ConfiguraEsPage);
  }goToAmigos(params){
    if (!params) params = {};
    this.navCtrl.push(AmigosPage);
  }goToRankign(params){
    if (!params) params = {};
    this.navCtrl.push(RankignPage);
  }goToSobre(params){
    if (!params) params = {};
    this.navCtrl.push(SobrePage);
  }
}
