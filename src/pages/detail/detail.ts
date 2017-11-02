import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  character: any;
  infotype: string;
  special_moves: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.character = navParams.data.item;
    this.initializeItems();
    this.infotype = "specialmoves"; // default segment button
  }

  initializeItems() {
    this.special_moves = this.character.special_moves;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.special_moves = this.special_moves.filter((move) => {
        return (move.command.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
