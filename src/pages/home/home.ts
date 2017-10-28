import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;

  constructor(public navCtrl: NavController) {
    this.items = [
      {
        "name": "Akuma",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/akuma-standard/thumbnail-headshot.png",
        "moves": [
          {
            "command": "in rage 1, 1, b or f+3, 2",
            "hit-level": "m(Throw)",
            "damage": 55,
            "start-up": "16 pc1~",
            "block-advantage": "",
            "hit-advantage": "Throw(KND)",
            "counter-hit-advantage": "Throw(KND)",
            "notes": "Rage art"
          },
          {
            "command": "1 or f+1",
            "hit-level": "h",
            "damage": 7,
            "start-up": 10,
            "block-advantage": 1,
            "hit-advantage": 8,
            "counter-hit-advantage": 8,
            "notes": "",
            "gif": ""
          },
          {
            "command": "1, 1",
            "hit-level": "h, h",
            "damage": "7,7",
            "start-up": 10,
            "block-advantage": -3,
            "hit-advantage": 4,
            "counter-hit-advantage": 4,
            "notes": "",
            "gif": ""
          },
          {
            "command": "1, 2",
            "hit-level": "h, m",
            "damage": "7,20",
            "start-up": 10,
            "block-advantage": "-17~-16",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "2 or f+2",
            "hit-level": "Sm",
            "damage": 15,
            "start-up": "15~16",
            "block-advantage": "-9~-8",
            "hit-advantage": "0~+1",
            "counter-hit-advantage": "0~+1",
            "notes": "",
            "gif": ""
          },
          {
            "command": "3 or b+3",
            "hit-level": "h",
            "damage": 14,
            "start-up": 15,
            "block-advantage": -8,
            "hit-advantage": 3,
            "counter-hit-advantage": 3,
            "notes": "",
            "gif": ""
          },
          {
            "command": 4,
            "hit-level": "h",
            "damage": 12,
            "start-up": "14~15",
            "block-advantage": "-13~-12",
            "hit-advantage": "+2~+3",
            "counter-hit-advantage": "+2~+3",
            "notes": "",
            "gif": ""
          },
          {
            "command": "4, 3",
            "hit-level": "h, h",
            "damage": "12,17",
            "start-up": "14~15",
            "block-advantage": "-5~-4",
            "hit-advantage": "+19k",
            "counter-hit-advantage": "KND",
            "notes": "Tail spin, Homing"
          },
          {
            "command": "1+2 or WS+1+2",
            "hit-level": "h",
            "damage": 14,
            "start-up": "31 pc8~",
            "block-advantage": -20,
            "hit-advantage": -8,
            "counter-hit-advantage": -8,
            "notes": "Power crush"
          },
          {
            "command": "1+2, f, f (Cancel)",
            "hit-level": "h",
            "damage": 14,
            "start-up": "315 pc8~",
            "block-advantage": -5,
            "hit-advantage": 7,
            "counter-hit-advantage": 7,
            "notes": "",
            "gif": ""
          },
          {
            "command": "1+2, b, b (Cancel)",
            "hit-level": "h",
            "damage": 14,
            "start-up": "315 pc8~",
            "block-advantage": -15,
            "hit-advantage": -3,
            "counter-hit-advantage": -3,
            "notes": "",
            "gif": ""
          },
          {
            "command": "1+2, *",
            "hit-level": "h",
            "damage": 20,
            "start-up": "40 pc8~",
            "block-advantage": -11,
            "hit-advantage": "CS",
            "counter-hit-advantage": "CS",
            "notes": "Power crush"
          },
          {
            "command": "1+2*, f, f (Cancel)",
            "hit-level": "h",
            "damage": 20,
            "start-up": "405 pc8~",
            "block-advantage": 4,
            "hit-advantage": "CS(21)",
            "counter-hit-advantage": "CS(21)",
            "notes": "Power crush"
          },
          {
            "command": "1+2*, b, b (Cancel)",
            "hit-level": "h",
            "damage": 20,
            "start-up": "405 pc8~",
            "block-advantage": -6,
            "hit-advantage": "CS(11)",
            "counter-hit-advantage": "CS(11)",
            "notes": "Power crush"
          },
          {
            "command": "1+2, (Hold long as possible)*",
            "hit-level": "h!",
            "damage": 25,
            "start-up": "65 pc8~54",
            "block-advantage": "CS",
            "hit-advantage": "CS",
            "counter-hit-advantage": "CS",
            "notes": "Power crush"
          },
          {
            "command": "1+2 (Hold long as possible)*, f, f (Cancel)",
            "hit-level": "h",
            "damage": 25,
            "start-up": "65 pc8~",
            "block-advantage": "CS(21)",
            "hit-advantage": "CS(21)",
            "counter-hit-advantage": "CS(21)",
            "notes": "Power crush"
          },
          {
            "command": "1+2 (Hold long as possible)*, b, b (Cancel)",
            "hit-level": "h",
            "damage": 25,
            "start-up": "65 pc8~",
            "block-advantage": "CS(11)",
            "hit-advantage": "CS(11)",
            "counter-hit-advantage": "CS(11)",
            "notes": "Power crush"
          },
          {
            "command": "f+3",
            "hit-level": "m",
            "damage": 16,
            "start-up": 17,
            "block-advantage": -9,
            "hit-advantage": 1,
            "counter-hit-advantage": 1,
            "notes": "",
            "gif": ""
          },
          {
            "command": "f+4",
            "hit-level": "h",
            "damage": 20,
            "start-up": "16~17",
            "block-advantage": "-9~-8",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "Tail spin, Homing"
          },
          {
            "command": "f+1+2",
            "hit-level": "mm",
            "damage": "5,15",
            "start-up": "20,32",
            "block-advantage": "-8s",
            "hit-advantage": "+5s",
            "counter-hit-advantage": "+5s",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f+1+2 (Second hit miss)",
            "hit-level": "m",
            "damage": 5,
            "start-up": 20,
            "block-advantage": "–",
            "hit-advantage": "–",
            "counter-hit-advantage": "–",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f+3+4",
            "hit-level": "m (TJ)(TPORT)",
            "damage": 20,
            "start-up": "22~23a js9~",
            "block-advantage": "-9~-8",
            "hit-advantage": "+2~+3",
            "counter-hit-advantage": "+2~+3",
            "notes": "Homing"
          },
          {
            "command": "d/f+1",
            "hit-level": "m",
            "damage": 10,
            "start-up": "13~14",
            "block-advantage": "-4~-3",
            "hit-advantage": "+7~+8",
            "counter-hit-advantage": "+7~+8",
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+1, 1",
            "hit-level": "m, h",
            "damage": "10,7",
            "start-up": "13~14",
            "block-advantage": -3,
            "hit-advantage": 6,
            "counter-hit-advantage": 6,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+1, 2",
            "hit-level": "m, mm",
            "damage": "10,5,15",
            "start-up": "13~14",
            "block-advantage": "-13s",
            "hit-advantage": "+5s",
            "counter-hit-advantage": "+5s",
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+1, 2 (Third hit miss)",
            "hit-level": "m, m",
            "damage": "10,5",
            "start-up": "13~14",
            "block-advantage": "–",
            "hit-advantage": "–",
            "counter-hit-advantage": "–",
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+2",
            "hit-level": "m",
            "damage": 10,
            "start-up": "16~17",
            "block-advantage": "-7~-6",
            "hit-advantage": "+3~+4",
            "counter-hit-advantage": "+3~+4",
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+2, 1",
            "hit-level": "m, m",
            "damage": "10,10",
            "start-up": "16~17",
            "block-advantage": "-18~-17",
            "hit-advantage": "Launch (JG?)",
            "counter-hit-advantage": "Launch (JG?)",
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+2, 4",
            "hit-level": "m, m",
            "damage": "10,13",
            "start-up": "16~17",
            "block-advantage": -11,
            "hit-advantage": 0,
            "counter-hit-advantage": 0,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+2, 4, 3",
            "hit-level": "m, m, m",
            "damage": "10,13,23",
            "start-up": "16~17",
            "block-advantage": "-17~-16",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+3",
            "hit-level": "m",
            "damage": 14,
            "start-up": 12,
            "block-advantage": -9,
            "hit-advantage": 1,
            "counter-hit-advantage": 1,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+4",
            "hit-level": "m",
            "damage": 24,
            "start-up": 19,
            "block-advantage": -16,
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b or d+1 or FC+1",
            "hit-level": "Sm (TC)",
            "damage": 5,
            "start-up": "10s cs4or1~",
            "block-advantage": -5,
            "hit-advantage": 6,
            "counter-hit-advantage": 6,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b or d+1, 2 or FC+1, 2",
            "hit-level": "Sm (TC), Sm (TC)",
            "damage": "5,8",
            "start-up": "s js1~",
            "block-advantage": -13,
            "hit-advantage": -2,
            "counter-hit-advantage": -2,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b or d+2 or FC+2",
            "hit-level": "Sm (TC)",
            "damage": 6,
            "start-up": "12s cs4or1~",
            "block-advantage": -4,
            "hit-advantage": 7,
            "counter-hit-advantage": 7,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b or d+3 or FC+3 (Close)",
            "hit-level": "l (TC)",
            "damage": 10,
            "start-up": "15s cs6or1~",
            "block-advantage": -11,
            "hit-advantage": -2,
            "counter-hit-advantage": -2,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b or d+3 or FC+3",
            "hit-level": "l (TC)",
            "damage": 7,
            "start-up": "15s cs6or1~",
            "block-advantage": -11,
            "hit-advantage": -2,
            "counter-hit-advantage": -2,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b or d+4 or FC+4",
            "hit-level": "l (TC)",
            "damage": 20,
            "start-up": "17~18s cs6or1~",
            "block-advantage": -27,
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "b+1",
            "hit-level": "h",
            "damage": 17,
            "start-up": "14~15",
            "block-advantage": "-14~-13",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "b+2",
            "hit-level": "m",
            "damage": 21,
            "start-up": "23~24",
            "block-advantage": "-9~-8",
            "hit-advantage": "+8~+9",
            "counter-hit-advantage": "hKZD",
            "notes": "",
            "gif": ""
          },
          {
            "command": "b+4",
            "hit-level": "l",
            "damage": 15,
            "start-up": "20~21",
            "block-advantage": "-13~-12",
            "hit-advantage": "+1~+2",
            "counter-hit-advantage": "+1~+2",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, F+2",
            "hit-level": "m",
            "damage": 14,
            "start-up": "15(16~)",
            "block-advantage": -14,
            "hit-advantage": -2,
            "counter-hit-advantage": -2,
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, F+2:1",
            "hit-level": "m, m",
            "damage": "14,20",
            "start-up": "15(16~)",
            "block-advantage": "-13~-12",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, F+4",
            "hit-level": "m",
            "damage": 23,
            "start-up": "20~21 (21~)",
            "block-advantage": "0~+1",
            "hit-advantage": "+2~+3s",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, f, f+1",
            "hit-level": "h",
            "damage": 30,
            "start-up": "16~17 (19~)",
            "block-advantage": "+1~+2",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, f, f+3",
            "hit-level": "m (TJ)",
            "damage": 30,
            "start-up": "26~31 (29~) js6~",
            "block-advantage": "+3~+8",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "WR+4",
            "hit-level": "l (TJ)",
            "damage": 23,
            "start-up": "20~26 (53~)",
            "block-advantage": "-24~-18",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "WS+1",
            "hit-level": "h",
            "damage": 12,
            "start-up": 13,
            "block-advantage": -5,
            "hit-advantage": 6,
            "counter-hit-advantage": 6,
            "notes": "",
            "gif": ""
          },
          {
            "command": "WS+2",
            "hit-level": "m",
            "damage": 17,
            "start-up": "15~16",
            "block-advantage": "-15~-14",
            "hit-advantage": "Launch (JG?)",
            "counter-hit-advantage": "Launch (JG?)",
            "notes": "",
            "gif": ""
          },
          {
            "command": "WS+3",
            "hit-level": "m",
            "damage": 17,
            "start-up": 13,
            "block-advantage": -7,
            "hit-advantage": 5,
            "counter-hit-advantage": "CS",
            "notes": "",
            "gif": ""
          },
          {
            "command": "WS+4",
            "hit-level": "m",
            "damage": 10,
            "start-up": "11~12",
            "block-advantage": "-9~-8",
            "hit-advantage": "+2~+3",
            "counter-hit-advantage": "+2~+3",
            "notes": "",
            "gif": ""
          },
          {
            "command": "WS+4, 4",
            "hit-level": "m, m",
            "damage": "10,20",
            "start-up": "11~12",
            "block-advantage": "-15~-14",
            "hit-advantage": "-5~-4s",
            "counter-hit-advantage": "TUD",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Vertical jump 1",
            "hit-level": "m (TJ)",
            "damage": 10,
            "start-up": "7(16~43) js1~",
            "block-advantage": "-25~+2",
            "hit-advantage": "-15~+12",
            "counter-hit-advantage": "-15~+12",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Vertical jump 2",
            "hit-level": "m (TJ)",
            "damage": 15,
            "start-up": "9(18~43) js1~",
            "block-advantage": "-18~+7",
            "hit-advantage": "-8~+17",
            "counter-hit-advantage": "-8~+17",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Vertical jump 3",
            "hit-level": "m (TJ)",
            "damage": 10,
            "start-up": "7(16~43) js1~",
            "block-advantage": "-25~+2",
            "hit-advantage": "-15~+12",
            "counter-hit-advantage": "-15~+12",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Vertical jump 4",
            "hit-level": "m (TJ)",
            "damage": 15,
            "start-up": "9(18~43) js1~",
            "block-advantage": "-18~+7",
            "hit-advantage": "-8~+17",
            "counter-hit-advantage": "-8~+17",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump 1 Backward jump 1",
            "hit-level": "m (TJ)",
            "damage": 10,
            "start-up": "9(14~40) js1~",
            "block-advantage": "-23~+4",
            "hit-advantage": "-13~+14",
            "counter-hit-advantage": "-13~+14",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump 2 Backward jump 2",
            "hit-level": "m (TJ)",
            "damage": 15,
            "start-up": "9(14~40) js1~",
            "block-advantage": "-18~+9",
            "hit-advantage": "-8~+19",
            "counter-hit-advantage": "-8~+19",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump 3 Backward jump 3",
            "hit-level": "m (TJ)",
            "damage": 10,
            "start-up": "7(12~40) js1~",
            "block-advantage": "-26~+2",
            "hit-advantage": "-16~+12",
            "counter-hit-advantage": "-16~+12",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump 4 Backward jump 4",
            "hit-level": "m (TJ)",
            "damage": 15,
            "start-up": "7(13~40) js1~",
            "block-advantage": "-20~+9",
            "hit-advantage": "-10~+19",
            "counter-hit-advantage": "-10~+19",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump Top of jump d+3",
            "hit-level": "m (TJ)",
            "damage": 14,
            "start-up": "13~ (34?~) js1~",
            "block-advantage": "-6~+1",
            "hit-advantage": "+9s~+16s",
            "counter-hit-advantage": "+9s~+16s",
            "notes": "",
            "gif": ""
          },
          {
            "command": "qcf+1 or qcf+2",
            "hit-level": "Sm",
            "damage": 14,
            "start-up": "19~",
            "block-advantage": "-13~",
            "hit-advantage": "-5~",
            "counter-hit-advantage": "-5~",
            "notes": "",
            "gif": ""
          },
          {
            "command": "qcf+1, 1+2f, f",
            "hit-level": "Sm",
            "damage": 14,
            "start-up": "19~",
            "block-advantage": "+7?~",
            "hit-advantage": "+15~",
            "counter-hit-advantage": "+15~",
            "notes": "",
            "gif": ""
          },
          {
            "command": "hcb+1",
            "hit-level": "Sm",
            "damage": 17,
            "start-up": "33~",
            "block-advantage": "-7~",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "hcb+2",
            "hit-level": "Sm x 3",
            "damage": "9,9,9",
            "start-up": "33~,41,49",
            "block-advantage": "-1~",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, d, d/f+1",
            "hit-level": "Sm",
            "damage": 15,
            "start-up": "10a cs6~",
            "block-advantage": -26,
            "hit-advantage": "Launch (JG?)",
            "counter-hit-advantage": "Launch (JG?)",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, d, d/f+1, 1+2f, f",
            "hit-level": "Sm",
            "damage": 15,
            "start-up": "10a cs6~",
            "block-advantage": 1,
            "hit-advantage": "Launch (JG?)",
            "counter-hit-advantage": "Launch (JG?)",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, d, d/f+2",
            "hit-level": "Sm x 3",
            "damage": "6,6,20",
            "start-up": "11,23,35a cs6~7",
            "block-advantage": "-34 (~16?a)",
            "hit-advantage": "Launch (JG?)",
            "counter-hit-advantage": "Launch (JG?)",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, d, d/f+2, 1+2f, f (Only first hit)",
            "hit-level": "Sm",
            "damage": 6,
            "start-up": "11a cs6~7",
            "block-advantage": "0~",
            "hit-advantage": 14,
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, d, d/f+2, 1+2f, f (Only two first hits)",
            "hit-level": "Sm x 2",
            "damage": "6,6",
            "start-up": "11,23a cs6~7",
            "block-advantage": "+?",
            "hit-advantage": "Launch (JG?)",
            "counter-hit-advantage": "Launch (JG?)",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, d, d/f+3(or 4)",
            "hit-level": "(Special) (TJ)(DFLIP)",
            "damage": "",
            "start-up": "11,23 6~7",
            "block-advantage": "",
            "hit-advantage": "",
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          },
          {
            "command": "DFLIP n",
            "hit-level": "l",
            "damage": 23,
            "start-up": "4~10 (51~)",
            "block-advantage": "-24~-18",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "DFLIP 1",
            "hit-level": "h",
            "damage": 15,
            "start-up": "7~ (34~46) js1~",
            "block-advantage": "-4~+7",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "DFLIP 2",
            "hit-level": "m",
            "damage": 25,
            "start-up": "16~20 (52~55) js1~",
            "block-advantage": "-9~-5s",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "DFLIP 3",
            "hit-level": "m",
            "damage": 23,
            "start-up": "14~ (41~52) js1~",
            "block-advantage": "-10~+1",
            "hit-advantage": "+24k",
            "counter-hit-advantage": "KND",
            "notes": "Tail spin, Homing"
          },
          {
            "command": "DFLIP 4",
            "hit-level": "Sm",
            "damage": 15,
            "start-up": "12~ (44~52) js1~",
            "block-advantage": "-4~-1",
            "hit-advantage": "+16~+19s",
            "counter-hit-advantage": "+16~+19s",
            "notes": "",
            "gif": ""
          },
          {
            "command": "DFLIP 1+3 or 2+4",
            "hit-level": "h(Throw)",
            "damage": 30,
            "start-up": "(32~)",
            "block-advantage": "",
            "hit-advantage": "Throw(KND)",
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          },
          {
            "command": "qcb+3",
            "hit-level": "h (TJ)",
            "damage": 10,
            "start-up": "15 js9~",
            "block-advantage": -15,
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "qcb+4",
            "hit-level": "Sm (TJ), h x 3",
            "damage": "13,6,6,6",
            "start-up": "10,25,44,54a js13~",
            "block-advantage": -14,
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Jump qcf+1 or 2",
            "hit-level": "Sm",
            "damage": 10,
            "start-up": "18(~) js1~",
            "block-advantage": "-21~",
            "hit-advantage": "-11~",
            "counter-hit-advantage": "-11~",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Jump qcb+3 or 4",
            "hit-level": "Sm",
            "damage": 10,
            "start-up": "13(~) js1~",
            "block-advantage": "-9~+2",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, d, d/f+3+4 or b, d, d/b+3+4",
            "hit-level": "(Special)",
            "damage": "",
            "start-up": "5inv",
            "block-advantage": "",
            "hit-advantage": "",
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          },
          {
            "command": "qcf+1+2",
            "hit-level": "Sm, Sm",
            "damage": "10,10",
            "start-up": "19~",
            "block-advantage": "+1~",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "hcb+1+2",
            "hit-level": "Sm x 3",
            "damage": "12,12,12",
            "start-up": "28~,36,44",
            "block-advantage": "+9~",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, d, d/f+1+2",
            "hit-level": "Sm x 3",
            "damage": "6,6,23",
            "start-up": "11,23,35a",
            "block-advantage": -34,
            "hit-advantage": "Launch (JG?)",
            "counter-hit-advantage": "Launch (JG?)",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, d, d/f+1+2 (On counter)",
            "hit-level": "Sm, (throw)",
            "damage": "7,8,9,9,9",
            "start-up": "11,,,",
            "block-advantage": "",
            "hit-advantage": "",
            "counter-hit-advantage": "Throw(Launch)",
            "notes": "",
            "gif": ""
          },
          {
            "command": "qcb+3+4",
            "hit-level": "Sm x 4",
            "damage": "6,6,6,20",
            "start-up": "10,24,39,44 js10~",
            "block-advantage": -25,
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Jump qcf+1+2",
            "hit-level": "Sm, Sm",
            "damage": "10,10",
            "start-up": "10,23 js1~",
            "block-advantage": "+3~",
            "hit-advantage": "+7~",
            "counter-hit-advantage": "+7~",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Jump qcb+3+4",
            "hit-level": "Sm",
            "damage": 10,
            "start-up": "13~ js1~",
            "block-advantage": "-4~+9",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "TPORT(f+3+4) qcf+1+2",
            "hit-level": "m (TJ), Sm x 2(TPORT)",
            "damage": "20,10,10",
            "start-up": "js1~",
            "block-advantage": "-5~-1",
            "hit-advantage": "+5~+9",
            "counter-hit-advantage": "+5~+9",
            "notes": "",
            "gif": ""
          },
          {
            "command": "TPORT(f+3+4) qcb+3+4",
            "hit-level": "m (TJ), Sm x 3(TPORT)",
            "damage": "20,6,6,20",
            "start-up": "js1~",
            "block-advantage": -15,
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "TPORT(f+3+4) qcb+3+4 (Third hit miss)",
            "hit-level": "m (TJ), Sm x 2(TPORT)",
            "damage": "20,6,6",
            "start-up": "js1~",
            "block-advantage": -25,
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "TPORT(f+3+4) qcb+3+4 (second and third hit miss)",
            "hit-level": "m (TJ), Sm(TPORT)",
            "damage": "20,6",
            "start-up": "1~",
            "block-advantage": -35,
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "qcf, qcf+1+2",
            "hit-level": "Sm x 5",
            "damage": "58(20*5)",
            "start-up": "10~,,,,",
            "block-advantage": "+2~",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "",
            "hit-level": "",
            "damage": "",
            "start-up": "",
            "block-advantage": "",
            "hit-advantage": "",
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Basic Moves",
            "hit-level": "",
            "damage": "",
            "start-up": "",
            "block-advantage": "",
            "hit-advantage": "",
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          },
          {
            "command": 1,
            "hit-level": "h",
            "damage": 7,
            "start-up": 10,
            "block-advantage": 1,
            "hit-advantage": 8,
            "counter-hit-advantage": 8,
            "notes": "",
            "gif": ""
          },
          {
            "command": 2,
            "hit-level": "Sm",
            "damage": 15,
            "start-up": 15,
            "block-advantage": -9,
            "hit-advantage": 0,
            "counter-hit-advantage": 0,
            "notes": "",
            "gif": ""
          },
          {
            "command": 3,
            "hit-level": "h",
            "damage": 14,
            "start-up": 15,
            "block-advantage": -8,
            "hit-advantage": 3,
            "counter-hit-advantage": 3,
            "notes": "",
            "gif": ""
          },
          {
            "command": 4,
            "hit-level": "h",
            "damage": 12,
            "start-up": 14,
            "block-advantage": -13,
            "hit-advantage": 2,
            "counter-hit-advantage": 2,
            "notes": "",
            "gif": ""
          },
          {
            "command": "b+1",
            "hit-level": "h",
            "damage": 17,
            "start-up": "14~15",
            "block-advantage": "-14~-13?",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND?",
            "notes": "",
            "gif": ""
          },
          {
            "command": "b+2",
            "hit-level": "m",
            "damage": 21,
            "start-up": 23,
            "block-advantage": -8,
            "hit-advantage": 8,
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "b+3",
            "hit-level": "h",
            "damage": 14,
            "start-up": 15,
            "block-advantage": -8,
            "hit-advantage": 3,
            "counter-hit-advantage": 3,
            "notes": "",
            "gif": ""
          },
          {
            "command": "b+4",
            "hit-level": "l",
            "damage": 15,
            "start-up": 20,
            "block-advantage": -13,
            "hit-advantage": 1,
            "counter-hit-advantage": 1,
            "notes": "",
            "gif": ""
          },
          {
            "command": "f+1",
            "hit-level": "h",
            "damage": 7,
            "start-up": 10,
            "block-advantage": 1,
            "hit-advantage": 8,
            "counter-hit-advantage": 8,
            "notes": "",
            "gif": ""
          },
          {
            "command": "f+2",
            "hit-level": "Sm",
            "damage": "17?",
            "start-up": 15,
            "block-advantage": -9,
            "hit-advantage": 0,
            "counter-hit-advantage": 0,
            "notes": "",
            "gif": ""
          },
          {
            "command": "f+3",
            "hit-level": "m",
            "damage": 18,
            "start-up": 17,
            "block-advantage": -9,
            "hit-advantage": 1,
            "counter-hit-advantage": 1,
            "notes": "",
            "gif": ""
          },
          {
            "command": "f+4",
            "hit-level": "h",
            "damage": 20,
            "start-up": "16-17",
            "block-advantage": -9,
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "Tail spin, Homing"
          },
          {
            "command": "f, F+1",
            "hit-level": "h",
            "damage": 7,
            "start-up": "10(11~)",
            "block-advantage": 1,
            "hit-advantage": 8,
            "counter-hit-advantage": 8,
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, F+2",
            "hit-level": "m",
            "damage": 14,
            "start-up": "16?(17?~)",
            "block-advantage": "-13?",
            "hit-advantage": "-1?",
            "counter-hit-advantage": "-1?",
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, F+3",
            "hit-level": "m",
            "damage": 18,
            "start-up": "17(18~)",
            "block-advantage": -8,
            "hit-advantage": 2,
            "counter-hit-advantage": 2,
            "notes": "",
            "gif": ""
          },
          {
            "command": "f, F+4",
            "hit-level": "m",
            "damage": 23,
            "start-up": "20?(~)",
            "block-advantage": 2,
            "hit-advantage": "+4s",
            "counter-hit-advantage": "+4s",
            "notes": "",
            "gif": ""
          },
          {
            "command": "d+1",
            "hit-level": "Sm (TC)",
            "damage": 5,
            "start-up": 10,
            "block-advantage": -5,
            "hit-advantage": 6,
            "counter-hit-advantage": 6,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d+2",
            "hit-level": "Sm (TC)",
            "damage": 6,
            "start-up": 12,
            "block-advantage": -4,
            "hit-advantage": 7,
            "counter-hit-advantage": 7,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b or d+3 (Close)",
            "hit-level": "l (TC)?",
            "damage": 10,
            "start-up": 15,
            "block-advantage": -11,
            "hit-advantage": -2,
            "counter-hit-advantage": -2,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b or d+3 (Far)",
            "hit-level": "l (TC)?",
            "damage": 6,
            "start-up": 15,
            "block-advantage": "-11?",
            "hit-advantage": "-2?",
            "counter-hit-advantage": "-2?",
            "notes": "",
            "gif": ""
          },
          {
            "command": "d+4",
            "hit-level": "l (TC)",
            "damage": 20,
            "start-up": "17~?",
            "block-advantage": "-26~?",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b+1",
            "hit-level": "Sm (TC)",
            "damage": 5,
            "start-up": 10,
            "block-advantage": -5,
            "hit-advantage": 6,
            "counter-hit-advantage": 6,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b+2",
            "hit-level": "Sm (TC)",
            "damage": 6,
            "start-up": 12,
            "block-advantage": -4,
            "hit-advantage": 7,
            "counter-hit-advantage": 7,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b or d+3 (Close)",
            "hit-level": "l (TC)?",
            "damage": 10,
            "start-up": 15,
            "block-advantage": -11,
            "hit-advantage": -2,
            "counter-hit-advantage": -2,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b or d+3 (Far)",
            "hit-level": "l (TC)?",
            "damage": 6,
            "start-up": 15,
            "block-advantage": "-11?",
            "hit-advantage": "-2?",
            "counter-hit-advantage": "-2?",
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/b+4",
            "hit-level": "l (TC)",
            "damage": 20,
            "start-up": "17~?",
            "block-advantage": "-26~?",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "FC+1",
            "hit-level": "Sm (TC)",
            "damage": 5,
            "start-up": 10,
            "block-advantage": -5,
            "hit-advantage": 6,
            "counter-hit-advantage": 6,
            "notes": "",
            "gif": ""
          },
          {
            "command": "FC+2",
            "hit-level": "Sm (TC)",
            "damage": 6,
            "start-up": 12,
            "block-advantage": -4,
            "hit-advantage": 7,
            "counter-hit-advantage": 7,
            "notes": "",
            "gif": ""
          },
          {
            "command": "FC+3 (Close)",
            "hit-level": "l (TC)?",
            "damage": 10,
            "start-up": 15,
            "block-advantage": -11,
            "hit-advantage": -2,
            "counter-hit-advantage": -2,
            "notes": "",
            "gif": ""
          },
          {
            "command": "FC+3 (Far)",
            "hit-level": "l (TC)?",
            "damage": 6,
            "start-up": 15,
            "block-advantage": "-11?",
            "hit-advantage": "-2?",
            "counter-hit-advantage": "-2?",
            "notes": "",
            "gif": ""
          },
          {
            "command": "FC+4",
            "hit-level": "l (TC)",
            "damage": 20,
            "start-up": "17~?",
            "block-advantage": "-26~?",
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "WS+1",
            "hit-level": "h",
            "damage": 12,
            "start-up": 13,
            "block-advantage": -5,
            "hit-advantage": 6,
            "counter-hit-advantage": 6,
            "notes": "",
            "gif": ""
          },
          {
            "command": "WS+2",
            "hit-level": "m",
            "damage": 17,
            "start-up": 15,
            "block-advantage": "-15?",
            "hit-advantage": "Launch (JG?)",
            "counter-hit-advantage": "Launch (JG?)",
            "notes": "",
            "gif": ""
          },
          {
            "command": "WS+3",
            "hit-level": "m",
            "damage": 17,
            "start-up": 13,
            "block-advantage": -7,
            "hit-advantage": 5,
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "WS+4",
            "hit-level": "m",
            "damage": 10,
            "start-up": 11,
            "block-advantage": -9,
            "hit-advantage": 2,
            "counter-hit-advantage": 2,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+1",
            "hit-level": "m",
            "damage": 10,
            "start-up": 13,
            "block-advantage": -4,
            "hit-advantage": 7,
            "counter-hit-advantage": 7,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+2",
            "hit-level": "m",
            "damage": 10,
            "start-up": 16,
            "block-advantage": -7,
            "hit-advantage": 3,
            "counter-hit-advantage": 3,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+3",
            "hit-level": "m",
            "damage": 14,
            "start-up": 12,
            "block-advantage": -9,
            "hit-advantage": 1,
            "counter-hit-advantage": 1,
            "notes": "",
            "gif": ""
          },
          {
            "command": "d/f+4",
            "hit-level": "m",
            "damage": 24,
            "start-up": 19,
            "block-advantage": -16,
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Vertical jump 1",
            "hit-level": "m (TJ)",
            "damage": 10,
            "start-up": "19(~)",
            "block-advantage": "–",
            "hit-advantage": "+?",
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Vertical jump 2",
            "hit-level": "m (TJ)",
            "damage": 20,
            "start-up": "19(~)(~)",
            "block-advantage": "",
            "hit-advantage": "",
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Vertical jump 3",
            "hit-level": "m (TJ)",
            "damage": 10,
            "start-up": "19(~)(~)(~)",
            "block-advantage": "–",
            "hit-advantage": "+?",
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Vertical jump 4",
            "hit-level": "m (TJ)",
            "damage": 20,
            "start-up": "19(~)(~)(~)(~)",
            "block-advantage": "–",
            "hit-advantage": "+",
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump 1",
            "hit-level": "m (TJ)",
            "damage": "",
            "start-up": "(~)",
            "block-advantage": "-?",
            "hit-advantage": "+?",
            "counter-hit-advantage": "+?",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump 1 (Close to ground)",
            "hit-level": "m (TJ)",
            "damage": "",
            "start-up": "(~)",
            "block-advantage": "",
            "hit-advantage": "",
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump 2",
            "hit-level": "m (TJ)",
            "damage": 15,
            "start-up": "(~)(~)",
            "block-advantage": "+3?",
            "hit-advantage": "+14?",
            "counter-hit-advantage": "+14?",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump 2 (Close to ground)",
            "hit-level": "m (TJ)",
            "damage": 15,
            "start-up": "(~)(~)(~)",
            "block-advantage": 7,
            "hit-advantage": 17,
            "counter-hit-advantage": 17,
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump 3",
            "hit-level": "m (TJ)",
            "damage": "",
            "start-up": "(~)",
            "block-advantage": "",
            "hit-advantage": "",
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump 3 (Close to ground)",
            "hit-level": "m (TJ)",
            "damage": "",
            "start-up": "(~)",
            "block-advantage": 2,
            "hit-advantage": 12,
            "counter-hit-advantage": 12,
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump 4",
            "hit-level": "m (TJ)",
            "damage": 15,
            "start-up": "(~)(~)",
            "block-advantage": "+3?",
            "hit-advantage": "+14?",
            "counter-hit-advantage": "+14?",
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump 4 (Close to ground)",
            "hit-level": "m (TJ)",
            "damage": 15,
            "start-up": "(~)(~)(~)",
            "block-advantage": 7,
            "hit-advantage": 17,
            "counter-hit-advantage": 17,
            "notes": "",
            "gif": ""
          },
          {
            "command": "Forward jump Top of jump d+3",
            "hit-level": "m (TJ)",
            "damage": 14,
            "start-up": "(~)(~)(~)",
            "block-advantage": "+4~",
            "hit-advantage": "+s",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "SS+1",
            "hit-level": "h",
            "damage": 7,
            "start-up": "10(11~)",
            "block-advantage": 1,
            "hit-advantage": 8,
            "counter-hit-advantage": 8,
            "notes": "",
            "gif": ""
          },
          {
            "command": "SS+2",
            "hit-level": "Sm",
            "damage": 15,
            "start-up": "15(16~)",
            "block-advantage": -9,
            "hit-advantage": 0,
            "counter-hit-advantage": 0,
            "notes": "",
            "gif": ""
          },
          {
            "command": "SS+3",
            "hit-level": "h",
            "damage": 14,
            "start-up": "15(16~)",
            "block-advantage": -8,
            "hit-advantage": 3,
            "counter-hit-advantage": 3,
            "notes": "",
            "gif": ""
          },
          {
            "command": "SS+4",
            "hit-level": "h",
            "damage": 12,
            "start-up": "14(15~)",
            "block-advantage": -13,
            "hit-advantage": 2,
            "counter-hit-advantage": 2,
            "notes": "",
            "gif": ""
          },
          {
            "command": "BT 1 or 2",
            "hit-level": "h",
            "damage": 20,
            "start-up": 8,
            "block-advantage": -8,
            "hit-advantage": 3,
            "counter-hit-advantage": 3,
            "notes": "",
            "gif": ""
          },
          {
            "command": "BT 3 or 4",
            "hit-level": "h",
            "damage": 33,
            "start-up": 10,
            "block-advantage": -8,
            "hit-advantage": "KND",
            "counter-hit-advantage": "KND",
            "notes": "",
            "gif": ""
          },
          {
            "command": "BT d+1 or 2",
            "hit-level": "Sm",
            "damage": 10,
            "start-up": "10s",
            "block-advantage": -2,
            "hit-advantage": 9,
            "counter-hit-advantage": 9,
            "notes": "",
            "gif": ""
          },
          {
            "command": "BT d+3 or 4",
            "hit-level": "l",
            "damage": 12,
            "start-up": "10s",
            "block-advantage": -11,
            "hit-advantage": 3,
            "counter-hit-advantage": 3,
            "notes": "",
            "gif": ""
          },
          {
            "command": "Last updated 04.08.2017",
            "hit-level": "",
            "damage": "",
            "start-up": "",
            "block-advantage": "",
            "hit-advantage": "",
            "counter-hit-advantage": "",
            "notes": "",
            "gif": ""
          }
        ]
      },
      {
        "name": "Alisa",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/alisa-standard/thumbnail-headshot.png"
      },
      {
        "name": "Asuka",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/asuka-standard/thumbnail-headshot.png"
      },
      {
        "name": "Bob",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/bob-standard/thumbnail-headshot.png"
      },
      {
        "name": "Bryan",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/bryan-standard/thumbnail-headshot.png"
      },
      {
        "name": "Claudio",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/claudio-standard/thumbnail-headshot.png"
      },
      {
        "name": "Devil Jin",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/devil-jin-standard/thumbnail-headshot.png"
      },
      {
        "name": "Dragunov",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/dragunov-standard/thumbnail-headshot.png"
      },
      {
        "name": "Eddy",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/eddy-standard/thumbnail-headshot.png"
      },
      {
        "name": "Eliza",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/eliza-standard/thumbnail-headshot.png"
      },
      {
        "name": "Feng",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/feng-standard/thumbnail-headshot.png"
      },
      {
        "name": "Gigas",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/gigas-standard/thumbnail-headshot.png"
      },
      {
        "name": "Heihachi",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/heihachi-standard/thumbnail-headshot.png"
      },
      {
        "name": "Hwoarang",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/hwoarang-standard/thumbnail-headshot.png"
      },
      {
        "name": "Jack7",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/jack-7-standard/thumbnail-headshot.png"
      },
      {
        "name": "Jin",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/jin-standard/thumbnail-headshot.png"
      },
      {
        "name": "Josie",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/josie-standard/thumbnail-headshot.png"
      },
      {
        "name": "Katarina",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/katarina-standard/thumbnail-headshot.png"
      },
      {
        "name": "Kazumi",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/kazumi-standard/thumbnail-headshot.png"
      },
      {
        "name": "Kazuya",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/kazuya-standard/thumbnail-headshot.png"
      },
      {
        "name": "King",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/king-standard/thumbnail-headshot.png"
      },
      {
        "name": "Kuma",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/kuma-standard/thumbnail-headshot.png"
      },
      {
        "name": "Lars",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/lars-standard/thumbnail-headshot.png"
      },
      {
        "name": "Law",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/law-standard/thumbnail-headshot.png"
      },
      {
        "name": "Lee",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/lee-standard/thumbnail-headshot.png"
      },
      {
        "name": "Leo",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/leo-standard/thumbnail-headshot.png"
      },
      {
        "name": "Lili",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/lili-standard/thumbnail-headshot.png"
      },
      {
        "name": "Lucky Chloe",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/lucky-standard/thumbnail-headshot.png"
      },
      {
        "name": "Master Raven",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/raven-standard/thumbnail-headshot.png"
      },
      {
        "name": "Miguel",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/miguel-standard/thumbnail-headshot.png"
      },
      {
        "name": "Nina",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/nina-standard/thumbnail-headshot.png"
      },
      {
        "name": "Paul",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/paul-standard/thumbnail-headshot.png"
      },
      {
        "name": "Shaheen",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/shaheen-standard/thumbnail-headshot.png"
      },
      {
        "name": "Steve",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/steve-standard/thumbnail-headshot.png"
      },
      {
        "name": "Xiaoyu",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/ling-standard/thumbnail-headshot.png"
      }
    ];
  }

  itemSelected(item) {
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }
}
