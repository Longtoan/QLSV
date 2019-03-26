import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-doimatkhau',
  templateUrl: 'doimatkhau.html',
})
export class DoimatkhauPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private Afauth: AngularFireAuth ) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DoimatkhauPage');
  }
  
}
