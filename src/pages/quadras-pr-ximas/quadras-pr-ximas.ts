import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Quadra } from '../../domain/quadra/quadra';
import { Http } from '@angular/http';
import { QuadraPage } from '../quadra/quadra'
@Component({
  selector: 'page-quadras-pr-ximas',
  templateUrl: 'quadras-pr-ximas.html'
})
export class QuadrasPrXimasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public quadras: Quadra[];
  constructor(public navCtrl: NavController,
    private _http: Http,
    private _loadimgCtrl: LoadingController,
    private _alertCtrl: AlertController) { }
  
  ngOnInit(){
    let loader = this._loadimgCtrl.create({
      content: 'Listando Quadras. Aguarde ...'
    });
    loader.present();
    this._http
      .get('http://localhost:8000/webService/quadra')
      .map(res => res.json())
      .toPromise()
      .then(quadras => {
        this.quadras = quadras;
        loader.dismiss();
      })
      .catch(err => {
        console.log(err);
        this._alertCtrl
        .create({
          title: 'Falha na conexão',
          buttons: [{ text: 'Estou ciente' }],
          subTitle: 'Não foi possivel obter a lista de quadras. Tente novamente.'
        }).present();
      });
  }
  selecionaQuadra(quadra){
    console.log('Entrou na Action selecionada');
    //passa para a nova pagina a quadra selecionada
    this.navCtrl.push(QuadraPage, { quadraSelecionada: quadra });
  }
}
