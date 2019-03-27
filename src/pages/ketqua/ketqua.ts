import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { snapShotToArray } from '../../app/envroiment';
@IonicPage()
@Component({
  selector: 'page-ketqua',
  templateUrl: 'ketqua.html',
})
export class KetquaPage {
  showDivContent : boolean =  true
  tongquan : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, private AfDatabase : AngularFireDatabase
    ) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.uid){
        this.AfDatabase.database.ref(`details/tongquan/`).orderByKey().equalTo(data.uid).on("value",resp =>{
          this.tongquan = [];
          this.tongquan = snapShotToArray(resp);
          console.log(this.tongquan);
        })
      }
    })

  }

  trove(){
    this.navCtrl.setRoot("HomePage")
  }
  showDiv(){
    this.showDivContent = !this.showDivContent
  }
}
