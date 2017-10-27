import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items;

  constructor(public navCtrl: NavController) {
    this.items = [
      { name: 'Akuma', motto: 'Can you withstand my power?', img: 'http://tk7.tekken.com/assets/images/fighters-final/akuma-standard/thumbnail-headshot.png' },
      { name: 'Alisa', motto: '', img: '' },
      { name: 'Asuka', motto: '', img: '' },
      { name: 'Bob', motto: '', img: '' },
      { name: 'Bryan', motto: '', img: '' },
      { name: 'Claudio', motto: '', img: '' },
      { name: 'Devil Jin', motto: '', img: '' },
      { name: 'Dragunov', motto: '', img: '' },
      { name: 'Eddy', motto: '', img: '' },
      { name: 'Eliza', motto: '', img: '' },
      { name: 'Feng', motto: '', img: '' },
      { name: 'Gigas', motto: '', img: '' },
      { name: 'Heihachi', motto: '', img: '' },
      { name: 'Hwoarang', motto: '', img: '' },
      { name: 'Jack7', motto: '', img: '' },
      { name: 'Jin', motto: '', img: '' },
      { name: 'Josie', motto: '', img: '' },
      { name: 'Katarina', motto: '', img: '' },
      { name: 'Kazumi', motto: '', img: '' },
      { name: 'Kazuya', motto: '', img: '' },
      { name: 'King', motto: '', img: '' },
      { name: 'Kuma', motto: '', img: '' },
      { name: 'Lars', motto: '', img: '' },
      { name: 'Law', motto: '', img: '' },
      { name: 'Lee', motto: '', img: '' },
      { name: 'Leo', motto: '', img: '' },
      { name: 'Lili', motto: '', img: '' },
      { name: 'Lucky Chloe', motto: '', img: '' },
      { name: 'Master Raven', motto: '', img: '' },
      { name: 'Miguel', motto: '', img: '' },
      { name: 'Nina', motto: '', img: '' },
      { name: 'Paul', motto: '', img: '' },
      { name: 'Shaheen', motto: '', img: '' },
      { name: 'Steve', motto: '', img: '' },
      { name: 'Xiaoyu', motto: '', img: '' }
    ];
  }

  itemSelected(item) {
    alert(item.name);
  }
}
