import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManualPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class ManualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManualPage');
    window.open('./../assets/user-manual.pdf', '_system', 'location=no');
  }

}
