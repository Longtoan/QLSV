import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../../models/user';
import {AngularFireAuth} from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
    constructor(public navCtrl: NavController, public navParams: NavParams, private Auth: AngularFireAuth) {
  }

  async login(user: User) {
    try {
          const result =  this.Auth.auth.signInWithEmailAndPassword(user.email,user.password);
      if(result){ 
     this.navCtrl.setRoot('HomePage');
    }
    } catch (e) {
  console.error(e);
  }
}}
