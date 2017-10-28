import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any;
  
  constructor(public navCtrl: NavController) {
    this.items = [
      { name: 'Akuma', img: 'http://tk7.tekken.com/assets/images/fighters-final/akuma-standard/thumbnail-headshot.png' },
      { name: 'Alisa', img: 'http://tk7.tekken.com/assets/images/fighters-final/alisa-standard/thumbnail-headshot.png' },
      { name: 'Asuka', img: 'http://tk7.tekken.com/assets/images/fighters-final/asuka-standard/thumbnail-headshot.png' },
      { name: 'Bob', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/bob-standard/thumbnail-headshot.png' },
      { name: 'Bryan', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/bryan-standard/thumbnail-headshot.png' },
      { name: 'Claudio', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/claudio-standard/thumbnail-headshot.png' },
      { name: 'Devil Jin', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/devil-jin-standard/thumbnail-headshot.png' },
      { name: 'Dragunov', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/dragunov-standard/thumbnail-headshot.png' },
      { name: 'Eddy', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/eddy-standard/thumbnail-headshot.png' },
      { name: 'Eliza', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/eliza-standard/thumbnail-headshot.png' },
      { name: 'Feng', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/feng-standard/thumbnail-headshot.png' },
      { name: 'Gigas', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/gigas-standard/thumbnail-headshot.png' },
      { name: 'Heihachi', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/heihachi-standard/thumbnail-headshot.png' },
      { name: 'Hwoarang', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/hwoarang-standard/thumbnail-headshot.png' },
      { name: 'Jack7', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/jack-7-standard/thumbnail-headshot.png' },
      { name: 'Jin', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/jin-standard/thumbnail-headshot.png' },
      { name: 'Josie', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/josie-standard/thumbnail-headshot.png' },
      { name: 'Katarina', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/katarina-standard/thumbnail-headshot.png' },
      { name: 'Kazumi', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/kazumi-standard/thumbnail-headshot.png' },
      { name: 'Kazuya', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/kazuya-standard/thumbnail-headshot.png' },
      { name: 'King', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/king-standard/thumbnail-headshot.png' },
      { name: 'Kuma', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/kuma-standard/thumbnail-headshot.png' },
      { name: 'Lars', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/lars-standard/thumbnail-headshot.png' },
      { name: 'Law', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/law-standard/thumbnail-headshot.png' },
      { name: 'Lee', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/lee-standard/thumbnail-headshot.png' },
      { name: 'Leo', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/leo-standard/thumbnail-headshot.png' },
      { name: 'Lili', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/lili-standard/thumbnail-headshot.png' },
      { name: 'Lucky Chloe', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/lucky-standard/thumbnail-headshot.png' },
      { name: 'Master Raven', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/raven-standard/thumbnail-headshot.png' },
      { name: 'Miguel', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/miguel-standard/thumbnail-headshot.png' },
      { name: 'Nina', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/nina-standard/thumbnail-headshot.png' },
      { name: 'Paul', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/paul-standard/thumbnail-headshot.png' },
      { name: 'Shaheen', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/shaheen-standard/thumbnail-headshot.png' },
      { name: 'Steve', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/steve-standard/thumbnail-headshot.png' },
      { name: 'Xiaoyu', motto: '', img: 'http://tk7.tekken.com/assets/images/fighters-final/ling-standard/thumbnail-headshot.png' }
    ];
  }

  itemSelected(item) {
    this.navCtrl.push(DetailPage, {
      item:item
    });
  }
}
