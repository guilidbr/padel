import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfiguraEsPage } from '../configura-es/configura-es';
import { AmigosPage } from '../amigos/amigos';
import { RankignPage } from '../rankign/rankign';
import { SobrePage } from '../sobre/sobre';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToConfiguraEs(params){
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
