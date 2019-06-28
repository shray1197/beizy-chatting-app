import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{AngularFireModule} from 'angularfire2'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ChatPage} from '../pages/chat/chat'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import{SplashPage} from '../pages/splash/splash'

var config = {
  apiKey: "AIzaSyBj9CxH7o1rMqQsFID7bM9vChJMrPu7QGc",
  authDomain: "chatapp-8cb66.firebaseapp.com",
  databaseURL: "https://chatapp-8cb66.firebaseio.com",
  projectId: "chatapp-8cb66",
  storageBucket: "chatapp-8cb66.appspot.com",
  messagingSenderId: "526446723059"
};

@NgModule({
  declarations: [
    MyApp,SplashPage,
    HomePage,ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,SplashPage,
    HomePage,ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
