import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject} from "angularfire2/database";
import { Profile } from "../../../models/profile";


@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
   profiledata: AngularFireObject<Profile[]>;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private afAth: AngularFireAuth,
    private afDatabse: AngularFireDatabase,
  ) { 
    
  }

  ionViewWillLoad() {
    this.afAth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast
          .create({
            message: `Wellcome to ${data.email}`,
            duration: 3000
          }).present();
          this.profiledata = this.afDatabse.object(`details/profile${data.uid}`)
          console.log(this.profiledata)  
      } else {
        this.toast
          .create({
            message: `Not Found`,
            duration: 3000
          })
          .present();
      }
    });
  }
}
