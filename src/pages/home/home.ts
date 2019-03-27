import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  ModalController
} from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";

import { snapShotToArray } from "../../app/envroiment";
@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  profiledata: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ModalCtrl: ModalController,
    private toast: ToastController,
    private afAth: AngularFireAuth,
    private afDatabse: AngularFireDatabase
  ) {}
  ionViewWillLoad() {
    this.afAth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast
          .create({
            message: `Wellcome to ${data.email}`,
            duration: 3000
          })
          .present();

        //load user + uid trên firebase
        this.afDatabse.database
          .ref(`details/profile/`)
          .orderByKey()
          .equalTo(data.uid)
          .on("value", resp => {
            this.profiledata = [];
            this.profiledata = snapShotToArray(resp);
            console.log(this.profiledata);
          });

       
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

  ketqua() {
    let modal =this.ModalCtrl.create("KetquaPage");
    modal.present()
  }
  // đăng xuất
  logout() {
    const log = this.afAth.auth.signOut();
    if (log) {
      this.navCtrl.setRoot("LoginPage");
    }
  }
  // hide and show
  hide = false;

  thongtin() {
    if (!this.hide) {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }
}
