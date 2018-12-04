import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Usuario } from '../../domain/usuario/usuario';
import { QuadrasPrXimasPage } from '../quadras-pr-ximas/quadras-pr-ximas';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public data;
  public http;
  public usuario: Usuario;
  
  constructor(
    public navCtrl: NavController,
    http: Http ) {
      this.data = {};
      this.data.response = '';
      this.http = http;
      this.usuario = new Usuario(null, null, null, null);
  }

  submit(){
    var link = 'http://localhost:8000/webService/signup';
    //cria o JSON a ser enviado
    var data = JSON.stringify({nome: this.usuario.nome, email: this.usuario.email, password: this.usuario.password});
    
    //iniciando a conexão HTTP para cadastro via JSON
    this.http.post(link, data)
    .subscribe( data => {
      this.data.response = data._body;
      if(this.data.response == 1){
        this.navCtrl.push(QuadrasPrXimasPage)
      }else{
        console.log(this.data.response);
      }
    }, error =>{
      console.log("Ocorreu algum erro! "+ this.data.response);
    });
  }
  
}
