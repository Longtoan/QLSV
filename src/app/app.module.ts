import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {FIREBASE_CONFIG} from './envroiment'
import {AngularFireModule} from 'Angularfire2'
import {AngularFireAuthModule} from 'angularfire2/auth'
import {
  AngularFireDatabase,
  AngularFireDatabaseModule } from 'angularfire2/database';
  import { AngularFirestoreModule } from 'angularfire2/firestore';
 
@NgModule({
  declarations: [
    MyApp,
    
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
