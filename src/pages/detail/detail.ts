import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovePage } from '../move/move';

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
  basic_moves: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.character = navParams.data.item;
    this.initializeSpecialMoves();
    this.initializeBasicMoves();
    this.infotype = "specialmoves"; // default segment button
  }

  initializeSpecialMoves() {
    this.special_moves = this.character.special_moves;
  }

  initializeBasicMoves() {
    this.basic_moves = this.character.basic_moves;
  }

  getSpecialMoves(ev: any) {
    this.initializeSpecialMoves();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.special_moves = this.special_moves.filter((move) => {
        return (move.command.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getBasicMoves(ev: any) {
    this.initializeBasicMoves();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.basic_moves = this.basic_moves.filter((move) => {
        return (move.command.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  moveSelected(move) {
    this.navCtrl.push(MovePage, {
      move: move
    });
  }

}