import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User} from "../../../models/user"

@IonicPage()
@Component({
  selector: 'page-doimatkhau',
  templateUrl: 'doimatkhau.html',
})
export class DoimatkhauPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,private Afauth: AngularFireAuth ) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DoimatkhauPage');
  }
  
  changepass(user : User) {
    try {
  const  result = this.Afauth.auth.confirmPasswordReset(user.password, user.newpass)
  
  if(result){
    this.navCtrl.setRoot("LoginPage");
  }
}
  catch(e){
    console.error(e);
    
  }
}

}
