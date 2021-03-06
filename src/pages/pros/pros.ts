import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pros',
  templateUrl: 'pros.html',
})
export class ProsPage {

  items = [];
  clickedItem = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {pos: 0, imageUrl: '', subItems: [
        {title: 'Purposeful Wellbeing', content: 'You will have more interest in the future', image: 'purposeful-1'},
        {title: 'Emotional Wellbeing', content: 'You will feel more optimistic, have more energy and enjoy life more', image: 'emotional-1'}
      ]},
      {pos: 0, imageUrl: '', subItems: [
        {title: 'Social Wellbeing', content: 'Your partner will be relieved because you can likely share a longer and healthier life together', image: '-social-1'},
        {title: 'Purposeful Wellbeing', content: 'You will set a great example for others', image: 'purposeful-3'}
      ]},
      { pos: 0, imageUrl: '', subItems: [
        {title: 'Behavioral Wellbeing', content: 'You will reduce excuses for not becoming engaged', image: 'behavioral-1'},
        {title: 'Purposeful Wellbeing', content: 'You won’t get judged by others, you won’t have to put up with critical looks from others', image: 'purposeful-2'}        
      ]},
      {pos: 0, imageUrl: '', subItems: [
        {title: 'Physical Wellbeing', content: 'You will be able to continue your daily routine', image: 'physical-1'}
      ]},
      {pos: 0, imageUrl: '', subItems: [
        {title: 'Emotional Wellbeing', content: 'You won’t have to feel embarrassed about being unengaged in your health', image: 'emotional-2'}
      ]},
    ];

    for (let item of this.items) {
      this.updateImageUrl(item);
    }

  }

  updateImageUrl(item) {
    item.imageUrl = `/assets/${item.subItems[item.pos].image}.jpg`;    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProsPage');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter ProsPage');
    if (this.clickedItem === null)
      return;
    let item  = this.clickedItem;
    item.pos = (item.pos + 1) % item.subItems.length;
    this.updateImageUrl(item);    
  }

  showProsDetailPage(item) {
    let subItem = item.subItems[item.pos];
    this.navCtrl.push("ProsDetailPage", {item: {imageUrl: item.imageUrl, title: subItem.title, content: subItem.content}});
    this.clickedItem = item;
  }
}
