import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Quadra } from '../../domain/quadra/quadra';

@Component({
    selector: 'page-quadra',
    templateUrl: 'quadra.html'
  })

  export class QuadraPage{
    public quadra: Quadra;
      constructor(
            public navCtrl: NavController,
            private _http: Http,
            public navParams: NavParams
      ){
        this.quadra = this.navParams.get('quadraSelecionada');
        console.log(this.quadra.descricao);
      }

  }