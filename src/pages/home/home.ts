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
        "motto": "CAN YOU WITHSTAND MY POWER?",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/akuma-standard/thumbnail-headshot.png",
        "special_moves": [
          {
            "command": "in rage 1, 1, b or f+3, 2",
            "hit_level": "m(Throw)",
            "damage": 55,
            "start_up_frame": "16 pc1~",
            "block_frame": "",
            "hit_frame": "Throw(KND)",
            "counter_hit_frame": "Throw(KND)",
            "notes": "Rage art"
          },
          {
            "command": "1 or f+1",
            "hit_level": "h",
            "damage": 7,
            "start_up_frame": 10,
            "block_frame": 1,
            "hit_frame": 8,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": "1, 1",
            "hit_level": "h, h",
            "damage": "7,7",
            "start_up_frame": 10,
            "block_frame": -3,
            "hit_frame": 4,
            "counter_hit_frame": 4,
            "notes": ""
          },
          {
            "command": "1, 2",
            "hit_level": "h, m",
            "damage": "7,20",
            "start_up_frame": 10,
            "block_frame": "-17~-16",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "2 or f+2",
            "hit_level": "Sm",
            "damage": 15,
            "start_up_frame": "15~16",
            "block_frame": "-9~-8",
            "hit_frame": "0~+1",
            "counter_hit_frame": "0~+1",
            "notes": ""
          },
          {
            "command": "3 or b+3",
            "hit_level": "h",
            "damage": 14,
            "start_up_frame": 15,
            "block_frame": -8,
            "hit_frame": 3,
            "counter_hit_frame": 3,
            "notes": ""
          },
          {
            "command": 4,
            "hit_level": "h",
            "damage": 12,
            "start_up_frame": "14~15",
            "block_frame": "-13~-12",
            "hit_frame": "+2~+3",
            "counter_hit_frame": "+2~+3",
            "notes": ""
          },
          {
            "command": "4, 3",
            "hit_level": "h, h",
            "damage": "12,17",
            "start_up_frame": "14~15",
            "block_frame": "-5~-4",
            "hit_frame": "+19k",
            "counter_hit_frame": "KND",
            "notes": "Tail spin, Homing"
          },
          {
            "command": "1+2 or WS+1+2",
            "hit_level": "h",
            "damage": 14,
            "start_up_frame": "31 pc8~",
            "block_frame": -20,
            "hit_frame": -8,
            "counter_hit_frame": -8,
            "notes": "Power crush"
          },
          {
            "command": "1+2, f, f (Cancel)",
            "hit_level": "h",
            "damage": 14,
            "start_up_frame": "315 pc8~",
            "block_frame": -5,
            "hit_frame": 7,
            "counter_hit_frame": 7,
            "notes": ""
          },
          {
            "command": "1+2, b, b (Cancel)",
            "hit_level": "h",
            "damage": 14,
            "start_up_frame": "315 pc8~",
            "block_frame": -15,
            "hit_frame": -3,
            "counter_hit_frame": -3,
            "notes": ""
          },
          {
            "command": "1+2, *",
            "hit_level": "h",
            "damage": 20,
            "start_up_frame": "40 pc8~",
            "block_frame": -11,
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": "Power crush"
          },
          {
            "command": "1+2*, f, f (Cancel)",
            "hit_level": "h",
            "damage": 20,
            "start_up_frame": "405 pc8~",
            "block_frame": 4,
            "hit_frame": "CS(21)",
            "counter_hit_frame": "CS(21)",
            "notes": "Power crush"
          },
          {
            "command": "1+2*, b, b (Cancel)",
            "hit_level": "h",
            "damage": 20,
            "start_up_frame": "405 pc8~",
            "block_frame": -6,
            "hit_frame": "CS(11)",
            "counter_hit_frame": "CS(11)",
            "notes": "Power crush"
          },
          {
            "command": "1+2, (Hold long as possible)*",
            "hit_level": "h!",
            "damage": 25,
            "start_up_frame": "65 pc8~54",
            "block_frame": "CS",
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": "Power crush"
          },
          {
            "command": "1+2 (Hold long as possible)*, f, f (Cancel)",
            "hit_level": "h",
            "damage": 25,
            "start_up_frame": "65 pc8~",
            "block_frame": "CS(21)",
            "hit_frame": "CS(21)",
            "counter_hit_frame": "CS(21)",
            "notes": "Power crush"
          },
          {
            "command": "1+2 (Hold long as possible)*, b, b (Cancel)",
            "hit_level": "h",
            "damage": 25,
            "start_up_frame": "65 pc8~",
            "block_frame": "CS(11)",
            "hit_frame": "CS(11)",
            "counter_hit_frame": "CS(11)",
            "notes": "Power crush"
          },
          {
            "command": "f+3",
            "hit_level": "m",
            "damage": 16,
            "start_up_frame": 17,
            "block_frame": -9,
            "hit_frame": 1,
            "counter_hit_frame": 1,
            "notes": ""
          },
          {
            "command": "f+4",
            "hit_level": "h",
            "damage": 20,
            "start_up_frame": "16~17",
            "block_frame": "-9~-8",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin, Homing"
          },
          {
            "command": "f+1+2",
            "hit_level": "mm",
            "damage": "5,15",
            "start_up_frame": "20,32",
            "block_frame": "-8s",
            "hit_frame": "+5s",
            "counter_hit_frame": "+5s",
            "notes": ""
          },
          {
            "command": "f+1+2 (Second hit miss)",
            "hit_level": "m",
            "damage": 5,
            "start_up_frame": 20,
            "block_frame": "–",
            "hit_frame": "–",
            "counter_hit_frame": "–",
            "notes": ""
          },
          {
            "command": "f+3+4",
            "hit_level": "m (TJ)(TPORT)",
            "damage": 20,
            "start_up_frame": "22~23a js9~",
            "block_frame": "-9~-8",
            "hit_frame": "+2~+3",
            "counter_hit_frame": "+2~+3",
            "notes": "Homing"
          },
          {
            "command": "d/f+1",
            "hit_level": "m",
            "damage": 10,
            "start_up_frame": "13~14",
            "block_frame": "-4~-3",
            "hit_frame": "+7~+8",
            "counter_hit_frame": "+7~+8",
            "notes": ""
          },
          {
            "command": "d/f+1, 1",
            "hit_level": "m, h",
            "damage": "10,7",
            "start_up_frame": "13~14",
            "block_frame": -3,
            "hit_frame": 6,
            "counter_hit_frame": 6,
            "notes": ""
          },
          {
            "command": "d/f+1, 2",
            "hit_level": "m, mm",
            "damage": "10,5,15",
            "start_up_frame": "13~14",
            "block_frame": "-13s",
            "hit_frame": "+5s",
            "counter_hit_frame": "+5s",
            "notes": ""
          },
          {
            "command": "d/f+1, 2 (Third hit miss)",
            "hit_level": "m, m",
            "damage": "10,5",
            "start_up_frame": "13~14",
            "block_frame": "–",
            "hit_frame": "–",
            "counter_hit_frame": "–",
            "notes": ""
          },
          {
            "command": "d/f+2",
            "hit_level": "m",
            "damage": 10,
            "start_up_frame": "16~17",
            "block_frame": "-7~-6",
            "hit_frame": "+3~+4",
            "counter_hit_frame": "+3~+4",
            "notes": ""
          },
          {
            "command": "d/f+2, 1",
            "hit_level": "m, m",
            "damage": "10,10",
            "start_up_frame": "16~17",
            "block_frame": "-18~-17",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "d/f+2, 4",
            "hit_level": "m, m",
            "damage": "10,13",
            "start_up_frame": "16~17",
            "block_frame": -11,
            "hit_frame": 0,
            "counter_hit_frame": 0,
            "notes": ""
          },
          {
            "command": "d/f+2, 4, 3",
            "hit_level": "m, m, m",
            "damage": "10,13,23",
            "start_up_frame": "16~17",
            "block_frame": "-17~-16",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d/f+3",
            "hit_level": "m",
            "damage": 14,
            "start_up_frame": 12,
            "block_frame": -9,
            "hit_frame": 1,
            "counter_hit_frame": 1,
            "notes": ""
          },
          {
            "command": "d/f+4",
            "hit_level": "m",
            "damage": 24,
            "start_up_frame": 19,
            "block_frame": -16,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d/b or d+1 or FC+1",
            "hit_level": "Sm (TC)",
            "damage": 5,
            "start_up_frame": "10s cs4or1~",
            "block_frame": -5,
            "hit_frame": 6,
            "counter_hit_frame": 6,
            "notes": ""
          },
          {
            "command": "d/b or d+1, 2 or FC+1, 2",
            "hit_level": "Sm (TC), Sm (TC)",
            "damage": "5,8",
            "start_up_frame": "s js1~",
            "block_frame": -13,
            "hit_frame": -2,
            "counter_hit_frame": -2,
            "notes": ""
          },
          {
            "command": "d/b or d+2 or FC+2",
            "hit_level": "Sm (TC)",
            "damage": 6,
            "start_up_frame": "12s cs4or1~",
            "block_frame": -4,
            "hit_frame": 7,
            "counter_hit_frame": 7,
            "notes": ""
          },
          {
            "command": "d/b or d+3 or FC+3 (Close)",
            "hit_level": "l (TC)",
            "damage": 10,
            "start_up_frame": "15s cs6or1~",
            "block_frame": -11,
            "hit_frame": -2,
            "counter_hit_frame": -2,
            "notes": ""
          },
          {
            "command": "d/b or d+3 or FC+3",
            "hit_level": "l (TC)",
            "damage": 7,
            "start_up_frame": "15s cs6or1~",
            "block_frame": -11,
            "hit_frame": -2,
            "counter_hit_frame": -2,
            "notes": ""
          },
          {
            "command": "d/b or d+4 or FC+4",
            "hit_level": "l (TC)",
            "damage": 20,
            "start_up_frame": "17~18s cs6or1~",
            "block_frame": -27,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "b+1",
            "hit_level": "h",
            "damage": 17,
            "start_up_frame": "14~15",
            "block_frame": "-14~-13",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "b+2",
            "hit_level": "m",
            "damage": 21,
            "start_up_frame": "23~24",
            "block_frame": "-9~-8",
            "hit_frame": "+8~+9",
            "counter_hit_frame": "hKZD",
            "notes": ""
          },
          {
            "command": "b+4",
            "hit_level": "l",
            "damage": 15,
            "start_up_frame": "20~21",
            "block_frame": "-13~-12",
            "hit_frame": "+1~+2",
            "counter_hit_frame": "+1~+2",
            "notes": ""
          },
          {
            "command": "f, F+2",
            "hit_level": "m",
            "damage": 14,
            "start_up_frame": "15(16~)",
            "block_frame": -14,
            "hit_frame": -2,
            "counter_hit_frame": -2,
            "notes": ""
          },
          {
            "command": "f, F+2:1",
            "hit_level": "m, m",
            "damage": "14,20",
            "start_up_frame": "15(16~)",
            "block_frame": "-13~-12",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, F+4",
            "hit_level": "m",
            "damage": 23,
            "start_up_frame": "20~21 (21~)",
            "block_frame": "0~+1",
            "hit_frame": "+2~+3s",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, f, f+1",
            "hit_level": "h",
            "damage": 30,
            "start_up_frame": "16~17 (19~)",
            "block_frame": "+1~+2",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, f, f+3",
            "hit_level": "m (TJ)",
            "damage": 30,
            "start_up_frame": "26~31 (29~) js6~",
            "block_frame": "+3~+8",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "WR+4",
            "hit_level": "l (TJ)",
            "damage": 23,
            "start_up_frame": "20~26 (53~)",
            "block_frame": "-24~-18",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "WS+1",
            "hit_level": "h",
            "damage": 12,
            "start_up_frame": 13,
            "block_frame": -5,
            "hit_frame": 6,
            "counter_hit_frame": 6,
            "notes": ""
          },
          {
            "command": "WS+2",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": "15~16",
            "block_frame": "-15~-14",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "WS+3",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": 13,
            "block_frame": -7,
            "hit_frame": 5,
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "WS+4",
            "hit_level": "m",
            "damage": 10,
            "start_up_frame": "11~12",
            "block_frame": "-9~-8",
            "hit_frame": "+2~+3",
            "counter_hit_frame": "+2~+3",
            "notes": ""
          },
          {
            "command": "WS+4, 4",
            "hit_level": "m, m",
            "damage": "10,20",
            "start_up_frame": "11~12",
            "block_frame": "-15~-14",
            "hit_frame": "-5~-4s",
            "counter_hit_frame": "TUD",
            "notes": ""
          },
          {
            "command": "Vertical jump 1",
            "hit_level": "m (TJ)",
            "damage": 10,
            "start_up_frame": "7(16~43) js1~",
            "block_frame": "-25~+2",
            "hit_frame": "-15~+12",
            "counter_hit_frame": "-15~+12",
            "notes": ""
          },
          {
            "command": "Vertical jump 2",
            "hit_level": "m (TJ)",
            "damage": 15,
            "start_up_frame": "9(18~43) js1~",
            "block_frame": "-18~+7",
            "hit_frame": "-8~+17",
            "counter_hit_frame": "-8~+17",
            "notes": ""
          },
          {
            "command": "Vertical jump 3",
            "hit_level": "m (TJ)",
            "damage": 10,
            "start_up_frame": "7(16~43) js1~",
            "block_frame": "-25~+2",
            "hit_frame": "-15~+12",
            "counter_hit_frame": "-15~+12",
            "notes": ""
          },
          {
            "command": "Vertical jump 4",
            "hit_level": "m (TJ)",
            "damage": 15,
            "start_up_frame": "9(18~43) js1~",
            "block_frame": "-18~+7",
            "hit_frame": "-8~+17",
            "counter_hit_frame": "-8~+17",
            "notes": ""
          },
          {
            "command": "Forward jump 1 Backward jump 1",
            "hit_level": "m (TJ)",
            "damage": 10,
            "start_up_frame": "9(14~40) js1~",
            "block_frame": "-23~+4",
            "hit_frame": "-13~+14",
            "counter_hit_frame": "-13~+14",
            "notes": ""
          },
          {
            "command": "Forward jump 2 Backward jump 2",
            "hit_level": "m (TJ)",
            "damage": 15,
            "start_up_frame": "9(14~40) js1~",
            "block_frame": "-18~+9",
            "hit_frame": "-8~+19",
            "counter_hit_frame": "-8~+19",
            "notes": ""
          },
          {
            "command": "Forward jump 3 Backward jump 3",
            "hit_level": "m (TJ)",
            "damage": 10,
            "start_up_frame": "7(12~40) js1~",
            "block_frame": "-26~+2",
            "hit_frame": "-16~+12",
            "counter_hit_frame": "-16~+12",
            "notes": ""
          },
          {
            "command": "Forward jump 4 Backward jump 4",
            "hit_level": "m (TJ)",
            "damage": 15,
            "start_up_frame": "7(13~40) js1~",
            "block_frame": "-20~+9",
            "hit_frame": "-10~+19",
            "counter_hit_frame": "-10~+19",
            "notes": ""
          },
          {
            "command": "Forward jump Top of jump d+3",
            "hit_level": "m (TJ)",
            "damage": 14,
            "start_up_frame": "13~ (34?~) js1~",
            "block_frame": "-6~+1",
            "hit_frame": "+9s~+16s",
            "counter_hit_frame": "+9s~+16s",
            "notes": ""
          },
          {
            "command": "qcf+1 or qcf+2",
            "hit_level": "Sm",
            "damage": 14,
            "start_up_frame": "19~",
            "block_frame": "-13~",
            "hit_frame": "-5~",
            "counter_hit_frame": "-5~",
            "notes": ""
          },
          {
            "command": "qcf+1, 1+2f, f",
            "hit_level": "Sm",
            "damage": 14,
            "start_up_frame": "19~",
            "block_frame": "+7?~",
            "hit_frame": "+15~",
            "counter_hit_frame": "+15~",
            "notes": ""
          },
          {
            "command": "hcb+1",
            "hit_level": "Sm",
            "damage": 17,
            "start_up_frame": "33~",
            "block_frame": "-7~",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "hcb+2",
            "hit_level": "Sm x 3",
            "damage": "9,9,9",
            "start_up_frame": "33~,41,49",
            "block_frame": "-1~",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, d, d/f+1",
            "hit_level": "Sm",
            "damage": 15,
            "start_up_frame": "10a cs6~",
            "block_frame": -26,
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "f, d, d/f+1, 1+2f, f",
            "hit_level": "Sm",
            "damage": 15,
            "start_up_frame": "10a cs6~",
            "block_frame": 1,
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "f, d, d/f+2",
            "hit_level": "Sm x 3",
            "damage": "6,6,20",
            "start_up_frame": "11,23,35a cs6~7",
            "block_frame": "-34 (~16?a)",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "f, d, d/f+2, 1+2f, f (Only first hit)",
            "hit_level": "Sm",
            "damage": 6,
            "start_up_frame": "11a cs6~7",
            "block_frame": "0~",
            "hit_frame": 14,
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "f, d, d/f+2, 1+2f, f (Only two first hits)",
            "hit_level": "Sm x 2",
            "damage": "6,6",
            "start_up_frame": "11,23a cs6~7",
            "block_frame": "+?",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "f, d, d/f+3(or 4)",
            "hit_level": "(Special) (TJ)(DFLIP)",
            "damage": "",
            "start_up_frame": "11,23 6~7",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "DFLIP n",
            "hit_level": "l",
            "damage": 23,
            "start_up_frame": "4~10 (51~)",
            "block_frame": "-24~-18",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "DFLIP 1",
            "hit_level": "h",
            "damage": 15,
            "start_up_frame": "7~ (34~46) js1~",
            "block_frame": "-4~+7",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "DFLIP 2",
            "hit_level": "m",
            "damage": 25,
            "start_up_frame": "16~20 (52~55) js1~",
            "block_frame": "-9~-5s",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "DFLIP 3",
            "hit_level": "m",
            "damage": 23,
            "start_up_frame": "14~ (41~52) js1~",
            "block_frame": "-10~+1",
            "hit_frame": "+24k",
            "counter_hit_frame": "KND",
            "notes": "Tail spin, Homing"
          },
          {
            "command": "DFLIP 4",
            "hit_level": "Sm",
            "damage": 15,
            "start_up_frame": "12~ (44~52) js1~",
            "block_frame": "-4~-1",
            "hit_frame": "+16~+19s",
            "counter_hit_frame": "+16~+19s",
            "notes": ""
          },
          {
            "command": "DFLIP 1+3 or 2+4",
            "hit_level": "h(Throw)",
            "damage": 30,
            "start_up_frame": "(32~)",
            "block_frame": "",
            "hit_frame": "Throw(KND)",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "qcb+3",
            "hit_level": "h (TJ)",
            "damage": 10,
            "start_up_frame": "15 js9~",
            "block_frame": -15,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "qcb+4",
            "hit_level": "Sm (TJ), h x 3",
            "damage": "13,6,6,6",
            "start_up_frame": "10,25,44,54a js13~",
            "block_frame": -14,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "Jump qcf+1 or 2",
            "hit_level": "Sm",
            "damage": 10,
            "start_up_frame": "18(~) js1~",
            "block_frame": "-21~",
            "hit_frame": "-11~",
            "counter_hit_frame": "-11~",
            "notes": ""
          },
          {
            "command": "Jump qcb+3 or 4",
            "hit_level": "Sm",
            "damage": 10,
            "start_up_frame": "13(~) js1~",
            "block_frame": "-9~+2",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, d, d/f+3+4 or b, d, d/b+3+4",
            "hit_level": "(Special)",
            "damage": "",
            "start_up_frame": "5inv",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "qcf+1+2",
            "hit_level": "Sm, Sm",
            "damage": "10,10",
            "start_up_frame": "19~",
            "block_frame": "+1~",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "hcb+1+2",
            "hit_level": "Sm x 3",
            "damage": "12,12,12",
            "start_up_frame": "28~,36,44",
            "block_frame": "+9~",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, d, d/f+1+2",
            "hit_level": "Sm x 3",
            "damage": "6,6,23",
            "start_up_frame": "11,23,35a",
            "block_frame": -34,
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "f, d, d/f+1+2 (On counter)",
            "hit_level": "Sm, (throw)",
            "damage": "7,8,9,9,9",
            "start_up_frame": "11,,,",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "Throw(Launch)",
            "notes": ""
          },
          {
            "command": "qcb+3+4",
            "hit_level": "Sm x 4",
            "damage": "6,6,6,20",
            "start_up_frame": "10,24,39,44 js10~",
            "block_frame": -25,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "Jump qcf+1+2",
            "hit_level": "Sm, Sm",
            "damage": "10,10",
            "start_up_frame": "10,23 js1~",
            "block_frame": "+3~",
            "hit_frame": "+7~",
            "counter_hit_frame": "+7~",
            "notes": ""
          },
          {
            "command": "Jump qcb+3+4",
            "hit_level": "Sm",
            "damage": 10,
            "start_up_frame": "13~ js1~",
            "block_frame": "-4~+9",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "TPORT(f+3+4) qcf+1+2",
            "hit_level": "m (TJ), Sm x 2(TPORT)",
            "damage": "20,10,10",
            "start_up_frame": "js1~",
            "block_frame": "-5~-1",
            "hit_frame": "+5~+9",
            "counter_hit_frame": "+5~+9",
            "notes": ""
          },
          {
            "command": "TPORT(f+3+4) qcb+3+4",
            "hit_level": "m (TJ), Sm x 3(TPORT)",
            "damage": "20,6,6,20",
            "start_up_frame": "js1~",
            "block_frame": -15,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "TPORT(f+3+4) qcb+3+4 (Third hit miss)",
            "hit_level": "m (TJ), Sm x 2(TPORT)",
            "damage": "20,6,6",
            "start_up_frame": "js1~",
            "block_frame": -25,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "TPORT(f+3+4) qcb+3+4 (second and third hit miss)",
            "hit_level": "m (TJ), Sm(TPORT)",
            "damage": "20,6",
            "start_up_frame": "1~",
            "block_frame": -35,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "qcf, qcf+1+2",
            "hit_level": "Sm x 5",
            "damage": "58(20*5)",
            "start_up_frame": "10~,,,,",
            "block_frame": "+2~",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          }
        ],
        "basic_moves": [
          {
            "command": 1,
            "hit_level": "h",
            "damage": 7,
            "start_up_frame": 10,
            "block_frame": 1,
            "hit_frame": 8,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": 2,
            "hit_level": "Sm",
            "damage": 15,
            "start_up_frame": 15,
            "block_frame": -9,
            "hit_frame": 0,
            "counter_hit_frame": 0,
            "notes": ""
          },
          {
            "command": 3,
            "hit_level": "h",
            "damage": 14,
            "start_up_frame": 15,
            "block_frame": -8,
            "hit_frame": 3,
            "counter_hit_frame": 3,
            "notes": ""
          },
          {
            "command": 4,
            "hit_level": "h",
            "damage": 12,
            "start_up_frame": 14,
            "block_frame": -13,
            "hit_frame": 2,
            "counter_hit_frame": 2,
            "notes": ""
          },
          {
            "command": "b+1",
            "hit_level": "h",
            "damage": 17,
            "start_up_frame": "14~15",
            "block_frame": "-14~-13?",
            "hit_frame": "KND",
            "counter_hit_frame": "KND?",
            "notes": ""
          },
          {
            "command": "b+2",
            "hit_level": "m",
            "damage": 21,
            "start_up_frame": 23,
            "block_frame": -8,
            "hit_frame": 8,
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "b+3",
            "hit_level": "h",
            "damage": 14,
            "start_up_frame": 15,
            "block_frame": -8,
            "hit_frame": 3,
            "counter_hit_frame": 3,
            "notes": ""
          },
          {
            "command": "b+4",
            "hit_level": "l",
            "damage": 15,
            "start_up_frame": 20,
            "block_frame": -13,
            "hit_frame": 1,
            "counter_hit_frame": 1,
            "notes": ""
          },
          {
            "command": "f+1",
            "hit_level": "h",
            "damage": 7,
            "start_up_frame": 10,
            "block_frame": 1,
            "hit_frame": 8,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": "f+2",
            "hit_level": "Sm",
            "damage": "17?",
            "start_up_frame": 15,
            "block_frame": -9,
            "hit_frame": 0,
            "counter_hit_frame": 0,
            "notes": ""
          },
          {
            "command": "f+3",
            "hit_level": "m",
            "damage": 18,
            "start_up_frame": 17,
            "block_frame": -9,
            "hit_frame": 1,
            "counter_hit_frame": 1,
            "notes": ""
          },
          {
            "command": "f+4",
            "hit_level": "h",
            "damage": 20,
            "start_up_frame": "16-17",
            "block_frame": -9,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin, Homing"
          },
          {
            "command": "f, F+1",
            "hit_level": "h",
            "damage": 7,
            "start_up_frame": "10(11~)",
            "block_frame": 1,
            "hit_frame": 8,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": "f, F+2",
            "hit_level": "m",
            "damage": 14,
            "start_up_frame": "16?(17?~)",
            "block_frame": "-13?",
            "hit_frame": "-1?",
            "counter_hit_frame": "-1?",
            "notes": ""
          },
          {
            "command": "f, F+3",
            "hit_level": "m",
            "damage": 18,
            "start_up_frame": "17(18~)",
            "block_frame": -8,
            "hit_frame": 2,
            "counter_hit_frame": 2,
            "notes": ""
          },
          {
            "command": "f, F+4",
            "hit_level": "m",
            "damage": 23,
            "start_up_frame": "20?(~)",
            "block_frame": 2,
            "hit_frame": "+4s",
            "counter_hit_frame": "+4s",
            "notes": ""
          },
          {
            "command": "d+1",
            "hit_level": "Sm (TC)",
            "damage": 5,
            "start_up_frame": 10,
            "block_frame": -5,
            "hit_frame": 6,
            "counter_hit_frame": 6,
            "notes": ""
          },
          {
            "command": "d+2",
            "hit_level": "Sm (TC)",
            "damage": 6,
            "start_up_frame": 12,
            "block_frame": -4,
            "hit_frame": 7,
            "counter_hit_frame": 7,
            "notes": ""
          },
          {
            "command": "d/b or d+3 (Close)",
            "hit_level": "l (TC)?",
            "damage": 10,
            "start_up_frame": 15,
            "block_frame": -11,
            "hit_frame": -2,
            "counter_hit_frame": -2,
            "notes": ""
          },
          {
            "command": "d/b or d+3 (Far)",
            "hit_level": "l (TC)?",
            "damage": 6,
            "start_up_frame": 15,
            "block_frame": "-11?",
            "hit_frame": "-2?",
            "counter_hit_frame": "-2?",
            "notes": ""
          },
          {
            "command": "d+4",
            "hit_level": "l (TC)",
            "damage": 20,
            "start_up_frame": "17~?",
            "block_frame": "-26~?",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d/b+1",
            "hit_level": "Sm (TC)",
            "damage": 5,
            "start_up_frame": 10,
            "block_frame": -5,
            "hit_frame": 6,
            "counter_hit_frame": 6,
            "notes": ""
          },
          {
            "command": "d/b+2",
            "hit_level": "Sm (TC)",
            "damage": 6,
            "start_up_frame": 12,
            "block_frame": -4,
            "hit_frame": 7,
            "counter_hit_frame": 7,
            "notes": ""
          },
          {
            "command": "d/b or d+3 (Close)",
            "hit_level": "l (TC)?",
            "damage": 10,
            "start_up_frame": 15,
            "block_frame": -11,
            "hit_frame": -2,
            "counter_hit_frame": -2,
            "notes": ""
          },
          {
            "command": "d/b or d+3 (Far)",
            "hit_level": "l (TC)?",
            "damage": 6,
            "start_up_frame": 15,
            "block_frame": "-11?",
            "hit_frame": "-2?",
            "counter_hit_frame": "-2?",
            "notes": ""
          },
          {
            "command": "d/b+4",
            "hit_level": "l (TC)",
            "damage": 20,
            "start_up_frame": "17~?",
            "block_frame": "-26~?",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "FC+1",
            "hit_level": "Sm (TC)",
            "damage": 5,
            "start_up_frame": 10,
            "block_frame": -5,
            "hit_frame": 6,
            "counter_hit_frame": 6,
            "notes": ""
          },
          {
            "command": "FC+2",
            "hit_level": "Sm (TC)",
            "damage": 6,
            "start_up_frame": 12,
            "block_frame": -4,
            "hit_frame": 7,
            "counter_hit_frame": 7,
            "notes": ""
          },
          {
            "command": "FC+3 (Close)",
            "hit_level": "l (TC)?",
            "damage": 10,
            "start_up_frame": 15,
            "block_frame": -11,
            "hit_frame": -2,
            "counter_hit_frame": -2,
            "notes": ""
          },
          {
            "command": "FC+3 (Far)",
            "hit_level": "l (TC)?",
            "damage": 6,
            "start_up_frame": 15,
            "block_frame": "-11?",
            "hit_frame": "-2?",
            "counter_hit_frame": "-2?",
            "notes": ""
          },
          {
            "command": "FC+4",
            "hit_level": "l (TC)",
            "damage": 20,
            "start_up_frame": "17~?",
            "block_frame": "-26~?",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "WS+1",
            "hit_level": "h",
            "damage": 12,
            "start_up_frame": 13,
            "block_frame": -5,
            "hit_frame": 6,
            "counter_hit_frame": 6,
            "notes": ""
          },
          {
            "command": "WS+2",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": 15,
            "block_frame": "-15?",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "WS+3",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": 13,
            "block_frame": -7,
            "hit_frame": 5,
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "WS+4",
            "hit_level": "m",
            "damage": 10,
            "start_up_frame": 11,
            "block_frame": -9,
            "hit_frame": 2,
            "counter_hit_frame": 2,
            "notes": ""
          },
          {
            "command": "d/f+1",
            "hit_level": "m",
            "damage": 10,
            "start_up_frame": 13,
            "block_frame": -4,
            "hit_frame": 7,
            "counter_hit_frame": 7,
            "notes": ""
          },
          {
            "command": "d/f+2",
            "hit_level": "m",
            "damage": 10,
            "start_up_frame": 16,
            "block_frame": -7,
            "hit_frame": 3,
            "counter_hit_frame": 3,
            "notes": ""
          },
          {
            "command": "d/f+3",
            "hit_level": "m",
            "damage": 14,
            "start_up_frame": 12,
            "block_frame": -9,
            "hit_frame": 1,
            "counter_hit_frame": 1,
            "notes": ""
          },
          {
            "command": "d/f+4",
            "hit_level": "m",
            "damage": 24,
            "start_up_frame": 19,
            "block_frame": -16,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "Vertical jump 1",
            "hit_level": "m (TJ)",
            "damage": 10,
            "start_up_frame": "19(~)",
            "block_frame": "–",
            "hit_frame": "+?",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "Vertical jump 2",
            "hit_level": "m (TJ)",
            "damage": 20,
            "start_up_frame": "19(~)(~)",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "Vertical jump 3",
            "hit_level": "m (TJ)",
            "damage": 10,
            "start_up_frame": "19(~)(~)(~)",
            "block_frame": "–",
            "hit_frame": "+?",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "Vertical jump 4",
            "hit_level": "m (TJ)",
            "damage": 20,
            "start_up_frame": "19(~)(~)(~)(~)",
            "block_frame": "–",
            "hit_frame": "+",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "Forward jump 1",
            "hit_level": "m (TJ)",
            "damage": "",
            "start_up_frame": "(~)",
            "block_frame": "-?",
            "hit_frame": "+?",
            "counter_hit_frame": "+?",
            "notes": ""
          },
          {
            "command": "Forward jump 1 (Close to ground)",
            "hit_level": "m (TJ)",
            "damage": "",
            "start_up_frame": "(~)",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "Forward jump 2",
            "hit_level": "m (TJ)",
            "damage": 15,
            "start_up_frame": "(~)(~)",
            "block_frame": "+3?",
            "hit_frame": "+14?",
            "counter_hit_frame": "+14?",
            "notes": ""
          },
          {
            "command": "Forward jump 2 (Close to ground)",
            "hit_level": "m (TJ)",
            "damage": 15,
            "start_up_frame": "(~)(~)(~)",
            "block_frame": 7,
            "hit_frame": 17,
            "counter_hit_frame": 17,
            "notes": ""
          },
          {
            "command": "Forward jump 3",
            "hit_level": "m (TJ)",
            "damage": "",
            "start_up_frame": "(~)",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "Forward jump 3 (Close to ground)",
            "hit_level": "m (TJ)",
            "damage": "",
            "start_up_frame": "(~)",
            "block_frame": 2,
            "hit_frame": 12,
            "counter_hit_frame": 12,
            "notes": ""
          },
          {
            "command": "Forward jump 4",
            "hit_level": "m (TJ)",
            "damage": 15,
            "start_up_frame": "(~)(~)",
            "block_frame": "+3?",
            "hit_frame": "+14?",
            "counter_hit_frame": "+14?",
            "notes": ""
          },
          {
            "command": "Forward jump 4 (Close to ground)",
            "hit_level": "m (TJ)",
            "damage": 15,
            "start_up_frame": "(~)(~)(~)",
            "block_frame": 7,
            "hit_frame": 17,
            "counter_hit_frame": 17,
            "notes": ""
          },
          {
            "command": "Forward jump Top of jump d+3",
            "hit_level": "m (TJ)",
            "damage": 14,
            "start_up_frame": "(~)(~)(~)",
            "block_frame": "+4~",
            "hit_frame": "+s",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "SS+1",
            "hit_level": "h",
            "damage": 7,
            "start_up_frame": "10(11~)",
            "block_frame": 1,
            "hit_frame": 8,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": "SS+2",
            "hit_level": "Sm",
            "damage": 15,
            "start_up_frame": "15(16~)",
            "block_frame": -9,
            "hit_frame": 0,
            "counter_hit_frame": 0,
            "notes": ""
          },
          {
            "command": "SS+3",
            "hit_level": "h",
            "damage": 14,
            "start_up_frame": "15(16~)",
            "block_frame": -8,
            "hit_frame": 3,
            "counter_hit_frame": 3,
            "notes": ""
          },
          {
            "command": "SS+4",
            "hit_level": "h",
            "damage": 12,
            "start_up_frame": "14(15~)",
            "block_frame": -13,
            "hit_frame": 2,
            "counter_hit_frame": 2,
            "notes": ""
          },
          {
            "command": "BT 1 or 2",
            "hit_level": "h",
            "damage": 20,
            "start_up_frame": 8,
            "block_frame": -8,
            "hit_frame": 3,
            "counter_hit_frame": 3,
            "notes": ""
          },
          {
            "command": "BT 3 or 4",
            "hit_level": "h",
            "damage": 33,
            "start_up_frame": 10,
            "block_frame": -8,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "BT d+1 or 2",
            "hit_level": "Sm",
            "damage": 10,
            "start_up_frame": "10s",
            "block_frame": -2,
            "hit_frame": 9,
            "counter_hit_frame": 9,
            "notes": ""
          },
          {
            "command": "BT d+3 or 4",
            "hit_level": "l",
            "damage": 12,
            "start_up_frame": "10s",
            "block_frame": -11,
            "hit_frame": 3,
            "counter_hit_frame": 3,
            "notes": ""
          }
        ]
      },
      {
        "name": "Alisa",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/alisa-standard/thumbnail-headshot.png",
        "special_moves":[
          {
            "command": "in rage b+1+2 in rage DES b+1+2",
            "hit_level": "h x 6, (DES)",
            "damage": 55,
            "start_up_frame": "13(~43?) pc8~",
            "block_frame": 1,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Rage art"
          },
          {
            "command": "in rage f+2+3",
            "hit_level": "m (TJ)m",
            "damage": "12,25",
            "start_up_frame": "16~17 ,36~37",
            "block_frame": "0~+1",
            "hit_frame": "SPD",
            "counter_hit_frame": "SPD",
            "notes": "Rage art, Tail spin"
          },
          {
            "command": "in rage f+2+3, 3+4",
            "hit_level": "m (TJ)m, (SBT)",
            "damage": "12,25",
            "start_up_frame": "16~17 ,36~37",
            "block_frame": "+5~+6",
            "hit_frame": "SPD",
            "counter_hit_frame": "SPD",
            "notes": "Rage art, Tail spin"
          },
          {
            "command": "in rage f+2+3, f+3+4",
            "hit_level": "m (TJ)m, (DBT)",
            "damage": "12,25",
            "start_up_frame": "16~17 ,36~37",
            "block_frame": "+5~+6",
            "hit_frame": "SPD",
            "counter_hit_frame": "SPD",
            "notes": "Rage art, Tail spin"
          },
          {
            "command": 1,
            "hit_level": "h",
            "damage": 7,
            "start_up_frame": 10,
            "block_frame": 1,
            "hit_frame": 8,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": "1, 1",
            "hit_level": "h, h",
            "damage": "7,18",
            "start_up_frame": 10,
            "block_frame": -3,
            "hit_frame": 5,
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "1, 1, 1+2",
            "hit_level": "h, h, (DES)",
            "damage": "7,18",
            "start_up_frame": 10,
            "block_frame": -3,
            "hit_frame": 5,
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "1, 2",
            "hit_level": "h, h",
            "damage": "7,10",
            "start_up_frame": 10,
            "block_frame": -2,
            "hit_frame": 4,
            "counter_hit_frame": 9,
            "notes": ""
          },
          {
            "command": "1, 2, 2",
            "hit_level": "h, h, l",
            "damage": "7,10,17",
            "start_up_frame": 10,
            "block_frame": "-11~-10",
            "hit_frame": "+2~+3",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "1, 2, 2*",
            "hit_level": "h, h, l",
            "damage": "7,10,22",
            "start_up_frame": 10,
            "block_frame": "-10~-9",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "1, 2, 4",
            "hit_level": "h, h, h",
            "damage": "7,10,21",
            "start_up_frame": 10,
            "block_frame": "-5~-4",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": 2,
            "hit_level": "h",
            "damage": 10,
            "start_up_frame": 12,
            "block_frame": -6,
            "hit_frame": 5,
            "counter_hit_frame": 5,
            "notes": ""
          },
          {
            "command": "2, 3",
            "hit_level": "h, m",
            "damage": "10,7",
            "start_up_frame": 12,
            "block_frame": "-10~-9",
            "hit_frame": "+1~+2",
            "counter_hit_frame": "+1~+2",
            "notes": ""
          },
          {
            "command": "2, 3, 3",
            "hit_level": "h, m, m (TJ)",
            "damage": "10,7,20",
            "start_up_frame": "12a",
            "block_frame": "-11~-9",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "2, 3, 4",
            "hit_level": "h, m, l (TJ)",
            "damage": "10,7,20",
            "start_up_frame": "js24~",
            "block_frame": "-19~-16",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "2, 4",
            "hit_level": "h, h",
            "damage": "10,21",
            "start_up_frame": "24~",
            "block_frame": "-5~-4",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": 3,
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": "14~15",
            "block_frame": "-12~-11",
            "hit_frame": "-1~0",
            "counter_hit_frame": "-1~0",
            "notes": ""
          },
          {
            "command": "3, 2",
            "hit_level": "m, m x 5, (DES)",
            "damage": "12,4*5",
            "start_up_frame": "14~15",
            "block_frame": -9,
            "hit_frame": 1,
            "counter_hit_frame": 1,
            "notes": ""
          },
          {
            "command": 4,
            "hit_level": "h",
            "damage": 24,
            "start_up_frame": "13~14",
            "block_frame": "-5~-4",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin, Homing"
          },
          {
            "command": "1+2",
            "hit_level": "m (TJ)",
            "damage": 21,
            "start_up_frame": "33~34 js7~",
            "block_frame": "-5~-4",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f+2",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": "17~18",
            "block_frame": "-4~-3",
            "hit_frame": "+7~+8",
            "counter_hit_frame": "+7~+8",
            "notes": ""
          },
          {
            "command": "f+2, 1",
            "hit_level": "m, m, (DES)",
            "damage": "12,20",
            "start_up_frame": "17~18",
            "block_frame": "-20~-19",
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "f+2, 1+2",
            "hit_level": "m, (DES)",
            "damage": 12,
            "start_up_frame": "17~18",
            "block_frame": "-4~-3",
            "hit_frame": "+7~+8",
            "counter_hit_frame": "+7~+8",
            "notes": ""
          },
          {
            "command": "f+2, 3",
            "hit_level": "m, h (TJ)",
            "damage": "12,8",
            "start_up_frame": "js17~",
            "block_frame": -8,
            "hit_frame": 4,
            "counter_hit_frame": 4,
            "notes": ""
          },
          {
            "command": "f+2, 3, f",
            "hit_level": "m, h (TJ), (Special)",
            "damage": "12,8",
            "start_up_frame": "17~a",
            "block_frame": -12,
            "hit_frame": 0,
            "counter_hit_frame": 0,
            "notes": ""
          },
          {
            "command": "f+2, 3, 3",
            "hit_level": "m, h (TJ), m",
            "damage": "12,8,20",
            "start_up_frame": "js1~12",
            "block_frame": "-10~-9",
            "hit_frame": "ED",
            "counter_hit_frame": "ED",
            "notes": ""
          },
          {
            "command": "f+3",
            "hit_level": "h",
            "damage": 13,
            "start_up_frame": "14~15",
            "block_frame": "-14~-13",
            "hit_frame": "-3~-2",
            "counter_hit_frame": "-3~-2",
            "notes": ""
          },
          {
            "command": "f+3, 2",
            "hit_level": "h, h, (DES)",
            "damage": "13,20",
            "start_up_frame": "14~15",
            "block_frame": "-4~-2",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "f+3, 1+2",
            "hit_level": "h, m, (DES)",
            "damage": "13,25",
            "start_up_frame": "14~15",
            "block_frame": "-13~-12",
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "f+4",
            "hit_level": "m",
            "damage": 14,
            "start_up_frame": 16,
            "block_frame": -12,
            "hit_frame": -2,
            "counter_hit_frame": -2,
            "notes": "Homing"
          },
          {
            "command": "f+4, 1",
            "hit_level": "m, h",
            "damage": "14,14",
            "start_up_frame": 16,
            "block_frame": "-9~-8",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f+4, 1, 4",
            "hit_level": "m, h, m",
            "damage": "14,14,24",
            "start_up_frame": 16,
            "block_frame": "-14~+12 (-12)",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f+1+2",
            "hit_level": "m",
            "damage": 25,
            "start_up_frame": "14~15",
            "block_frame": "-12~-11",
            "hit_frame": "+7~+8",
            "counter_hit_frame": "+7~+8",
            "notes": ""
          },
          {
            "command": "f+1+2, 3+4",
            "hit_level": "m, (Special) (TJ)(SBT)",
            "damage": 25,
            "start_up_frame": "14~15a",
            "block_frame": "-16~-15",
            "hit_frame": "+3~+4",
            "counter_hit_frame": "+3~+4",
            "notes": ""
          },
          {
            "command": "f+1+2, f+3+4",
            "hit_level": "m, (Special) (TJ)(DBT)",
            "damage": 25,
            "start_up_frame": "14~15a",
            "block_frame": "-16~-15",
            "hit_frame": "+3~+4",
            "counter_hit_frame": "+3~+4",
            "notes": ""
          },
          {
            "command": "d/f+1",
            "hit_level": "m",
            "damage": 10,
            "start_up_frame": 13,
            "block_frame": -6,
            "hit_frame": 5,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": "d/f+1, 1",
            "hit_level": "m, h",
            "damage": "10,20",
            "start_up_frame": 13,
            "block_frame": "+1~+2",
            "hit_frame": "+8~+9",
            "counter_hit_frame": "+8~+9",
            "notes": ""
          },
          {
            "command": "d/f+1, 1, 2",
            "hit_level": "m, h, h x 7, (DES)",
            "damage": "10,20,4*7",
            "start_up_frame": 13,
            "block_frame": 6,
            "hit_frame": 8,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": "d/f+1, 4",
            "hit_level": "m, m",
            "damage": "10,17",
            "start_up_frame": 13,
            "block_frame": "-9~-8",
            "hit_frame": "+5~+6s",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d/f+2",
            "hit_level": "m",
            "damage": 16,
            "start_up_frame": "16~17",
            "block_frame": "-9~-8",
            "hit_frame": "Launch (JG?)(+7)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "d/f+3",
            "hit_level": "m",
            "damage": 14,
            "start_up_frame": 16,
            "block_frame": -9,
            "hit_frame": 1,
            "counter_hit_frame": 1,
            "notes": ""
          },
          {
            "command": "d/f+3, 3",
            "hit_level": "m, l",
            "damage": "14,17",
            "start_up_frame": 16,
            "block_frame": "-12~-11",
            "hit_frame": "+1~+2",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d/f+4",
            "hit_level": "m",
            "damage": 13,
            "start_up_frame": 12,
            "block_frame": -7,
            "hit_frame": 4,
            "counter_hit_frame": 4,
            "notes": ""
          },
          {
            "command": "d/f+1+2",
            "hit_level": "m, (DES)",
            "damage": 25,
            "start_up_frame": "18~19",
            "block_frame": "-11~-10",
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "d+2",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": "24~26",
            "block_frame": "-14~-12",
            "hit_frame": "+2~+4s",
            "counter_hit_frame": "+2~+4s",
            "notes": ""
          },
          {
            "command": "d+2, 4",
            "hit_level": "m, m",
            "damage": "17,24",
            "start_up_frame": "24~26a",
            "block_frame": "-13~-10",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d+2, 4, 1+2",
            "hit_level": "m, m, (DES)",
            "damage": "17,24",
            "start_up_frame": "24~26a",
            "block_frame": "-13~-10",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d+3",
            "hit_level": "l (TJ), (Special) (TC)",
            "damage": 17,
            "start_up_frame": "23~32s js9~",
            "block_frame": "+1~+10",
            "hit_frame": "+19~+28s",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d+3 (After stance ends)",
            "hit_level": "l (TJ), (Special) (TC)",
            "damage": 17,
            "start_up_frame": "23~32s js9~",
            "block_frame": "-19~-10s",
            "hit_frame": "-1~+8s",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d+4",
            "hit_level": "l",
            "damage": 15,
            "start_up_frame": "17~18",
            "block_frame": "-16~-15",
            "hit_frame": "-5~-4",
            "counter_hit_frame": "-5~-4",
            "notes": ""
          },
          {
            "command": "d+4, 1+2",
            "hit_level": "l, h",
            "damage": "15,20",
            "start_up_frame": "17~18",
            "block_frame": "-1~0",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "d+3+4",
            "hit_level": "l (TJ)",
            "damage": 20,
            "start_up_frame": "27~28 js5~ cs20~",
            "block_frame": -37,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Homing"
          },
          {
            "command": "d+3+4, 1+2",
            "hit_level": "l (TJ), (DES)",
            "damage": 20,
            "start_up_frame": "27~28 js5~ cs20~",
            "block_frame": "",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Homing"
          },
          {
            "command": "d/b+2",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": "18~19",
            "block_frame": "-18~-17",
            "hit_frame": "-5~-4",
            "counter_hit_frame": "-5~-4",
            "notes": ""
          },
          {
            "command": "d/b+2, 2",
            "hit_level": "m, m",
            "damage": "17,13",
            "start_up_frame": "18~19",
            "block_frame": "-10~-9",
            "hit_frame": "+14~+15 (SH)",
            "counter_hit_frame": "+14~+15 (SH)",
            "notes": ""
          },
          {
            "command": "d/b+2, 2, 1+2",
            "hit_level": "m, m, (DES)",
            "damage": "17,13",
            "start_up_frame": "18~19",
            "block_frame": "-10~-9",
            "hit_frame": "+14~+15 (SH)",
            "counter_hit_frame": "+14~+15 (SH)",
            "notes": ""
          },
          {
            "command": "d/b+3",
            "hit_level": "l (TC)",
            "damage": 11,
            "start_up_frame": "16s cs4~",
            "block_frame": -12,
            "hit_frame": -1,
            "counter_hit_frame": 4,
            "notes": ""
          },
          {
            "command": "d/b+4",
            "hit_level": "l (TC)",
            "damage": 23,
            "start_up_frame": "24~25a cs6~",
            "block_frame": "-17~-16",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "b+1",
            "hit_level": "m",
            "damage": 15,
            "start_up_frame": "15~16s",
            "block_frame": "-5~-4",
            "hit_frame": "+8~+9",
            "counter_hit_frame": "+8~+9",
            "notes": ""
          },
          {
            "command": "b+1, 1+2",
            "hit_level": "m, Sm, m",
            "damage": "15,1,30",
            "start_up_frame": "15~16",
            "block_frame": "-16~-14",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "b+2",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": 18,
            "block_frame": -12,
            "hit_frame": -2,
            "counter_hit_frame": -2,
            "notes": ""
          },
          {
            "command": "b+2, 1",
            "hit_level": "m, m",
            "damage": "12,17",
            "start_up_frame": 18,
            "block_frame": "-13~-12",
            "hit_frame": "+3~+4s",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "b+2, 4",
            "hit_level": "m, h",
            "damage": "12,20",
            "start_up_frame": 18,
            "block_frame": "-7~-6",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "b+3",
            "hit_level": "m",
            "damage": 26,
            "start_up_frame": "20~22",
            "block_frame": "-8~-6",
            "hit_frame": "ED",
            "counter_hit_frame": "ED",
            "notes": "Homing"
          },
          {
            "command": "b+4",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": "15~16",
            "block_frame": "-13~-12",
            "hit_frame": "-4~-3",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "b+4, 3",
            "hit_level": "m, m",
            "damage": "17,15",
            "start_up_frame": "js1~27",
            "block_frame": "-11~-10",
            "hit_frame": "+6~+7s",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "b+4, 3, 1+2",
            "hit_level": "m (TJ), m, (DES)",
            "damage": "17,15",
            "start_up_frame": "1~27",
            "block_frame": "-11~-10",
            "hit_frame": "+6~+7s",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "b+3+4",
            "hit_level": "m (TJ)",
            "damage": 20,
            "start_up_frame": "19~20 js6~",
            "block_frame": "-17~-16",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "b+3+4, 3+4",
            "hit_level": "m (TJ), m (TJ)",
            "damage": "20,35",
            "start_up_frame": "js1~",
            "block_frame": "+5~+10s",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "b+2+3",
            "hit_level": "!",
            "damage": 50,
            "start_up_frame": 75,
            "block_frame": "KND",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "u/b+3+4",
            "hit_level": "m (TJ)",
            "damage": 25,
            "start_up_frame": "37~39 js5~",
            "block_frame": "+2~+4s",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "BT 3+4",
            "hit_level": "m (TJ)",
            "damage": 25,
            "start_up_frame": "37~39b js5~",
            "block_frame": "+2~+4s",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "u/b+3+4, 1+2 or BT 3+4, 1+2",
            "hit_level": "m (TJ), m?",
            "damage": "25,20",
            "start_up_frame": "js1~20 ar48~",
            "block_frame": "-14~-13",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "u/b or u or u/f+3",
            "hit_level": "m (TJ)",
            "damage": 15,
            "start_up_frame": "20~21 js9~",
            "block_frame": "-57~-56",
            "hit_frame": "-29~-28 (SH)",
            "counter_hit_frame": "-29~-28 (SH)",
            "notes": ""
          },
          {
            "command": "u/f+3, 2",
            "hit_level": "m (TJ), m (TJ)",
            "damage": "15,30",
            "start_up_frame": "js1~",
            "block_frame": "-14~-9",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "u/f+3, 3+4",
            "hit_level": "m (TJ), (Special) (TJ)(SBT)",
            "damage": 15,
            "start_up_frame": "js1~",
            "block_frame": "-29~-28",
            "hit_frame": "-3~-2 (SH)",
            "counter_hit_frame": "-3~-2 (SH)",
            "notes": ""
          },
          {
            "command": "u/f+3, f+3+4",
            "hit_level": "m (TJ), (Special) (TJ)(DBT)",
            "damage": 15,
            "start_up_frame": "js1~",
            "block_frame": "-29~-28",
            "hit_frame": "-3~-2 (SH)",
            "counter_hit_frame": "-3~-2 (SH)",
            "notes": ""
          },
          {
            "command": "u or u/f+4",
            "hit_level": "m (TJ)",
            "damage": 10,
            "start_up_frame": "15~16 js9~",
            "block_frame": "-15~-14",
            "hit_frame": "-4~-3",
            "counter_hit_frame": "-4~-3",
            "notes": ""
          },
          {
            "command": "u/f+4, 4",
            "hit_level": "m (TJ), m",
            "damage": "10,10",
            "start_up_frame": "js1~",
            "block_frame": "-13~-11s",
            "hit_frame": "BU",
            "counter_hit_frame": "BU",
            "notes": ""
          },
          {
            "command": "u or u/f+3+4",
            "hit_level": "m (TJ)",
            "damage": 28,
            "start_up_frame": "38~41 js9~",
            "block_frame": "0~+3",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, F+2",
            "hit_level": "m",
            "damage": 18,
            "start_up_frame": "16~17 (17~)",
            "block_frame": "-18~-17",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, F+2, 3",
            "hit_level": "m, m",
            "damage": "18,25",
            "start_up_frame": "16~17 (17~)",
            "block_frame": "-13~-11",
            "hit_frame": "KMED",
            "counter_hit_frame": "KMED",
            "notes": ""
          },
          {
            "command": "f, F+3",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": "18~19 (19~) js15~",
            "block_frame": "-18~-17",
            "hit_frame": "-6~-5",
            "counter_hit_frame": "-6~-5",
            "notes": ""
          },
          {
            "command": "f, F+3, 4",
            "hit_level": "m, h (TJ)",
            "damage": "12,15",
            "start_up_frame": "js1~",
            "block_frame": "-9~-8",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, F+3, 4, 1+2",
            "hit_level": "m, h (TJ), (DES)",
            "damage": "12,15",
            "start_up_frame": "js1~",
            "block_frame": "-9~-8",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, F+3, 4, 4",
            "hit_level": "m, h (TJ), m",
            "damage": "12,15,25",
            "start_up_frame": "js1~12",
            "block_frame": "-10~-8",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "f, F+3, 4, 4, 1+2",
            "hit_level": "m, h (TJ), m, (DES)",
            "damage": "12,15,25",
            "start_up_frame": "js1~12",
            "block_frame": "-10~-8",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "f, F+4",
            "hit_level": "m",
            "damage": 18,
            "start_up_frame": "19~26 (20~)",
            "block_frame": "-11~-4",
            "hit_frame": "Throw(+5b)",
            "counter_hit_frame": "Throw(+5b)",
            "notes": ""
          },
          {
            "command": "f, F+4 When hit f or b+1",
            "hit_level": "m, m",
            "damage": "18,22",
            "start_up_frame": "19~26 (20~)",
            "block_frame": "",
            "hit_frame": "KND",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "f, F+1+2",
            "hit_level": "mm",
            "damage": "5,18",
            "start_up_frame": "17~18, 30~31 (18~)",
            "block_frame": "-16~-15",
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "f, F+1+2 When hit 2",
            "hit_level": "mm, m x 6, (DES)",
            "damage": "5,18,2*6",
            "start_up_frame": "17~18, 30~31 (18~)",
            "block_frame": "",
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "b, f+2",
            "hit_level": "h",
            "damage": 26,
            "start_up_frame": "16~24 (16~) pc8~15",
            "block_frame": "-8~0",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Power crush"
          },
          {
            "command": "b, B+1+4",
            "hit_level": "h! (TJ)",
            "damage": 50,
            "start_up_frame": "63~80 (64~)",
            "block_frame": "KND",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, f, f+2",
            "hit_level": "h",
            "damage": 30,
            "start_up_frame": "13~15 (16~) js3~",
            "block_frame": "+5~+7",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, f, f+3",
            "hit_level": "m (TJ)",
            "damage": 15,
            "start_up_frame": "18~19 (21~) js3~",
            "block_frame": "-4~-3",
            "hit_frame": "+6~+7",
            "counter_hit_frame": "+6~+7",
            "notes": ""
          },
          {
            "command": "f, f, f+3, 4",
            "hit_level": "m (TJ), m (TJ)",
            "damage": "15,20",
            "start_up_frame": "js1~",
            "block_frame": "-7~-5",
            "hit_frame": "KMED",
            "counter_hit_frame": "KMED",
            "notes": "Tail spin"
          },
          {
            "command": "WR+1+2",
            "hit_level": "m (TJ)",
            "damage": 24,
            "start_up_frame": "18~36 js5~",
            "block_frame": "-3~+15",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "WS+1",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": "13~14",
            "block_frame": "-12~-11",
            "hit_frame": "-1~0",
            "counter_hit_frame": "-1~0",
            "notes": ""
          },
          {
            "command": "WS+1, 2",
            "hit_level": "m, h",
            "damage": "12,9",
            "start_up_frame": "13~14",
            "block_frame": "-5~-4",
            "hit_frame": "+6~+7",
            "counter_hit_frame": "+6~+7",
            "notes": ""
          },
          {
            "command": "WS+1, 2, 3",
            "hit_level": "m, h, m",
            "damage": "12,9,23",
            "start_up_frame": "13~14",
            "block_frame": "-10~-9",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "WS+1, 2, 3, 1+2",
            "hit_level": "m, h, m, (DES)",
            "damage": "12,9,23",
            "start_up_frame": "13~14",
            "block_frame": "-10~-9",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "WS+2",
            "hit_level": "m",
            "damage": 24,
            "start_up_frame": "17~18",
            "block_frame": "-13~-12",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "WS+2, 3+4",
            "hit_level": "m, (Special) (TJ)(SBT)",
            "damage": 24,
            "start_up_frame": "17~18 js1~",
            "block_frame": "-7~-6",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "WS+2, f+3+4",
            "hit_level": "m, (Special) (TJ)(DBT)",
            "damage": 24,
            "start_up_frame": "17~18 js1~",
            "block_frame": "-7~-6",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "WS+3",
            "hit_level": "m, (Special)",
            "damage": 18,
            "start_up_frame": "19~20a",
            "block_frame": "-137~-136",
            "hit_frame": "-126~-125",
            "counter_hit_frame": "-126~-125",
            "notes": ""
          },
          {
            "command": "WS+3, 3, B (Cancel)",
            "hit_level": "m, (Special)",
            "damage": 18,
            "start_up_frame": "19~20",
            "block_frame": "-14~-13",
            "hit_frame": "-1~0",
            "counter_hit_frame": "-1~0",
            "notes": ""
          },
          {
            "command": "WS+3, 3 (one spin)",
            "hit_level": "m",
            "damage": 20,
            "start_up_frame": "13~14",
            "block_frame": "-10~-9",
            "hit_frame": "+11kg",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "WS+3, 3",
            "hit_level": "m",
            "damage": 22,
            "start_up_frame": "13~14",
            "block_frame": "0~+1",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "WS+3, d+3",
            "hit_level": "l (TC)",
            "damage": 20,
            "start_up_frame": "30~31s cs9~",
            "block_frame": "-12~-11",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "WS+4",
            "hit_level": "m",
            "damage": 15,
            "start_up_frame": "11~12",
            "block_frame": "-5~-4",
            "hit_frame": "+6~+7",
            "counter_hit_frame": "+6~+7",
            "notes": ""
          },
          {
            "command": "WS+1+2",
            "hit_level": "m",
            "damage": 20,
            "start_up_frame": "20~21s",
            "block_frame": "-8~-7",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Homing"
          },
          {
            "command": "WS+1+2, * (two spins)",
            "hit_level": "m",
            "damage": 24,
            "start_up_frame": "28~29s",
            "block_frame": "-4~-3",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Homing"
          },
          {
            "command": "WS+1+2, * (three spins)",
            "hit_level": "m",
            "damage": 28,
            "start_up_frame": "39~40s",
            "block_frame": "0~+1",
            "hit_frame": "AZUD",
            "counter_hit_frame": "AZUD",
            "notes": "Homing"
          },
          {
            "command": "FC+d/f+1+2",
            "hit_level": "ll",
            "damage": "10,16",
            "start_up_frame": "21~23, 31~33 cs1~",
            "block_frame": "-11~-9",
            "hit_frame": "+5~+7s",
            "counter_hit_frame": "+5~+7s",
            "notes": ""
          },
          {
            "command": "FC+d/f+1+2 , 1+2",
            "hit_level": "ll, (DES)",
            "damage": "10,16",
            "start_up_frame": "21~23, 31~33 cs1~",
            "block_frame": "-11~-9",
            "hit_frame": "+5~+7s",
            "counter_hit_frame": "+5~+7s",
            "notes": ""
          },
          {
            "command": "SS+4",
            "hit_level": "l",
            "damage": 15,
            "start_up_frame": "24~25 (33~) cs6~",
            "block_frame": "-12~-11",
            "hit_frame": "-1~0",
            "counter_hit_frame": "+7~+8",
            "notes": ""
          },
          {
            "command": "SS+4 , 1+2",
            "hit_level": "l, h x 3 (TJ), m (TJ)",
            "damage": "15,5*4",
            "start_up_frame": "js15~",
            "block_frame": "-10~-9",
            "hit_frame": "+8~+9",
            "counter_hit_frame": "+8~+9",
            "notes": ""
          },
          {
            "command": "BT 4",
            "hit_level": "m (TJ)",
            "damage": 20,
            "start_up_frame": "16~17b",
            "block_frame": "-3~-2",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "Opponent Down d/b+1+2",
            "hit_level": "l(On grounded opponent)",
            "damage": 20,
            "start_up_frame": "24~26",
            "block_frame": "-17~-15",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "Grounded face up 1+2",
            "hit_level": "(Special) (TJ)",
            "damage": "",
            "start_up_frame": "a",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "Grounded face up 1+2, 3+4",
            "hit_level": "(Special) (TJ), m (TJ)",
            "damage": 35,
            "start_up_frame": "22~23 (42~43) js1~",
            "block_frame": "-10~-9",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "1+2+3",
            "hit_level": "(Special) (TJ)",
            "damage": "",
            "start_up_frame": "a",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "1+2+4",
            "hit_level": "(Special)",
            "damage": "",
            "start_up_frame": "(g)",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "1+2+3+4",
            "hit_level": "(Special) (TJ)",
            "damage": "",
            "start_up_frame": "a",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "1+2+3+4, 1+2",
            "hit_level": "(Special) (TJ), (DES)",
            "damage": "",
            "start_up_frame": "a",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "d/b+1",
            "hit_level": "(Special) (TC)",
            "damage": "",
            "start_up_frame": "s(cs4)",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "d/b+1~1",
            "hit_level": "h",
            "damage": 31,
            "start_up_frame": "26~28 cs4~15",
            "block_frame": "+4~+6",
            "hit_frame": "KMED",
            "counter_hit_frame": "KEFD",
            "notes": "Tail spin"
          },
          {
            "command": "d/b+1~2",
            "hit_level": "h! (Sky)",
            "damage": "20(,3)",
            "start_up_frame": "49~90",
            "block_frame": "KND",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d/b+1~3",
            "hit_level": "m (TJ)",
            "damage": 30,
            "start_up_frame": "39~42 js15~",
            "block_frame": "-10~-7",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d/b+1~4",
            "hit_level": "m",
            "damage": 30,
            "start_up_frame": "33~38 js17~",
            "block_frame": "-9~-4",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "f+3+4 (to SBT)",
            "hit_level": "(Special) (TJ)(SBT)",
            "damage": "",
            "start_up_frame": "33~38 17~",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "f+3+4, B",
            "hit_level": "(Special)",
            "damage": "",
            "start_up_frame": "s(47~)",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "f+3+4, D",
            "hit_level": "(Special)",
            "damage": "",
            "start_up_frame": "s(36~)",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "SBT 1",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": "13~14 (38~) js1~",
            "block_frame": "-15~-14",
            "hit_frame": "0~+1",
            "counter_hit_frame": "0~+1",
            "notes": ""
          },
          {
            "command": "SBT 1, 2",
            "hit_level": "m, m",
            "damage": "12,13",
            "start_up_frame": "js1~",
            "block_frame": "-9~-8",
            "hit_frame": "+2~+3",
            "counter_hit_frame": "+7~+8s",
            "notes": ""
          },
          {
            "command": "SBT 1, 2, 1",
            "hit_level": "m, m, m",
            "damage": "12,13,7",
            "start_up_frame": "js1~",
            "block_frame": "-20~-19",
            "hit_frame": "-12~-11",
            "counter_hit_frame": "-12~-11",
            "notes": ""
          },
          {
            "command": "SBT 1, 2, 1 , 3+4",
            "hit_level": "m, m, m, mm",
            "damage": "12,13,7,5,28",
            "start_up_frame": "js1~",
            "block_frame": -18,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "SBT 1, 2, 1 , 3+4, 1+2",
            "hit_level": "m, m, m, mm, (DES)",
            "damage": "12,13,7,5,28",
            "start_up_frame": "js1~",
            "block_frame": "-18~-17",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "SBT 2",
            "hit_level": "m",
            "damage": 25,
            "start_up_frame": "16~27 (41~) js1~",
            "block_frame": "-8~+3",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "SBT 2, 1+2",
            "hit_level": "m, (DES)",
            "damage": 25,
            "start_up_frame": "16~27 (41~) js1~",
            "block_frame": "-8~+3",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "SBT 3",
            "hit_level": "l",
            "damage": 17,
            "start_up_frame": "16~20s (41~) js1~cs9~",
            "block_frame": "-14~-10",
            "hit_frame": "+4~+8s",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "SBT 4",
            "hit_level": "m",
            "damage": "22(,5)",
            "start_up_frame": "18~19 (43~) js1~",
            "block_frame": "-27~-26",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "d+1+2 or From special move (to DES)",
            "hit_level": "(DES)",
            "damage": "",
            "start_up_frame": "18~19 (43~) 1~",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "DES b or F",
            "hit_level": "(DES)",
            "damage": "",
            "start_up_frame": "18~19 (43~) 1~",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "DES d+1+2 or D/B (Cancel)",
            "hit_level": "(DES)",
            "damage": "",
            "start_up_frame": "18~19 (43~) 1~",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "DES 1",
            "hit_level": "mmhhhm",
            "damage": "3*5,20",
            "start_up_frame": "14,,,",
            "block_frame": -9,
            "hit_frame": "KZUD",
            "counter_hit_frame": "KZUD",
            "notes": ""
          },
          {
            "command": "DES 2",
            "hit_level": "mmm",
            "damage": "5*3",
            "start_up_frame": "20,,",
            "block_frame": -8,
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "DES 2 When hit 1",
            "hit_level": "m x 3, h!",
            "damage": "5*3,14",
            "start_up_frame": "20,,",
            "block_frame": "",
            "hit_frame": "Launch",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "DES 3 or 4",
            "hit_level": "(Special)",
            "damage": "",
            "start_up_frame": "20,,",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "DES 1+2",
            "hit_level": "hhh",
            "damage": "7,7,20",
            "start_up_frame": "16,,",
            "block_frame": 0,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Homing"
          },
          {
            "command": "DES f+1",
            "hit_level": "h x 7",
            "damage": "3*7",
            "start_up_frame": "12,,,",
            "block_frame": 0,
            "hit_frame": 11,
            "counter_hit_frame": 11,
            "notes": ""
          },
          {
            "command": "DES f+2",
            "hit_level": "(Sky)!",
            "damage": "3,2,1,1,1",
            "start_up_frame": "10,,,",
            "block_frame": "",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "DES f+1+2",
            "hit_level": "m x 8",
            "damage": "3*7,13",
            "start_up_frame": "23,,,",
            "block_frame": 7,
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "DES f+1+2, 1+2",
            "hit_level": "m x 5, m",
            "damage": "3*5,20(,3)",
            "start_up_frame": "23,,,(b)",
            "block_frame": -53,
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "DES d+1",
            "hit_level": "l x 5 (TC)",
            "damage": "4*4,8",
            "start_up_frame": "20~21, cs4~",
            "block_frame": -12,
            "hit_frame": "-2s",
            "counter_hit_frame": "-2s",
            "notes": ""
          },
          {
            "command": "DES d+2",
            "hit_level": "llll",
            "damage": "5*4",
            "start_up_frame": "30,,,",
            "block_frame": "-14~-13",
            "hit_frame": "+2~+3",
            "counter_hit_frame": "2~+3",
            "notes": ""
          },
          {
            "command": "DES d+2, *",
            "hit_level": "l x 5 or 6",
            "damage": "5*5or6",
            "start_up_frame": "30,,,",
            "block_frame": "-14~-13",
            "hit_frame": "+2~+3",
            "counter_hit_frame": "2~+3",
            "notes": ""
          },
          {
            "command": "DES b+2",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": "18~20",
            "block_frame": "-12~-10",
            "hit_frame": "0~+2",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "DES b+2, 1",
            "hit_level": "m, m, Sm x 4",
            "damage": "17,8,5*4",
            "start_up_frame": "18~20",
            "block_frame": "-8s",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "DES b+3+4 or b, b or u/b, b",
            "hit_level": "(Special) (TJ)",
            "damage": "",
            "start_up_frame": "a",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "DES u or d+3+4",
            "hit_level": "(Special) (TJ)",
            "damage": "",
            "start_up_frame": "",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "DES u or d+3+4, 1",
            "hit_level": "(Special) (TJ), m",
            "damage": 25,
            "start_up_frame": "20~21 (44~)",
            "block_frame": "-20~-19",
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "DES u/b or u or u/f+1+2",
            "hit_level": "mmm (TJ)",
            "damage": "9*3",
            "start_up_frame": "29,,, js5~28",
            "block_frame": "-9s",
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "DES u/f+1+2, 1+2",
            "hit_level": "m x 3 (TJ), (Special)",
            "damage": "9*3",
            "start_up_frame": "29,,, js5~28",
            "block_frame": "-9s",
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "DES BT 1 or 2",
            "hit_level": "m x 6",
            "damage": "4*6",
            "start_up_frame": "19,,,",
            "block_frame": -9,
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "DES f+3+4 or f, f (to DBT)",
            "hit_level": "(DBT)",
            "damage": "",
            "start_up_frame": "19,,,",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "DBT b (Cancel)",
            "hit_level": "(Special)",
            "damage": "",
            "start_up_frame": "19,,,",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "DBT f+3+4, u or D",
            "hit_level": "(Special) (TJ)",
            "damage": "",
            "start_up_frame": "19,,,",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "DBT 1",
            "hit_level": "h x 6",
            "damage": "5*6",
            "start_up_frame": "24,,, js1~20",
            "block_frame": 9,
            "hit_frame": 11,
            "counter_hit_frame": 11,
            "notes": ""
          },
          {
            "command": "DBT 2",
            "hit_level": "mmhhh",
            "damage": "8,8,8,20,25",
            "start_up_frame": "16~17,,, js1~",
            "block_frame": -14,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "DBT 2, 1+2",
            "hit_level": "mmhhh, (Special)",
            "damage": "8,8,8,20,25",
            "start_up_frame": "16~17,,, js1~",
            "block_frame": -14,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "DBT 2, 1",
            "hit_level": "mmhh, h (TJ)",
            "damage": "8,8,8,20,45",
            "start_up_frame": "js1~",
            "block_frame": "-12~10s",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "DBT 2, 1, 1+2",
            "hit_level": "mmhh, h (TJ), (Special)",
            "damage": "8,8,8,20,45",
            "start_up_frame": "js1~",
            "block_frame": "-12~10s",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "DBT 1+2",
            "hit_level": "mmmm",
            "damage": "5,5,5,20",
            "start_up_frame": "12,,, js1~",
            "block_frame": -5,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          }
        ],
        "basic_moves":[
          {
            "command": 1,
            "hit_level": "h",
            "damage": 7,
            "start_up_frame": 10,
            "block_frame": 1,
            "hit_frame": 8,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": 2,
            "hit_level": "h",
            "damage": 10,
            "start_up_frame": 12,
            "block_frame": -6,
            "hit_frame": 5,
            "counter_hit_frame": 5,
            "notes": ""
          },
          {
            "command": 3,
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": "14~15",
            "block_frame": "-12~-11",
            "hit_frame": "-1~0",
            "counter_hit_frame": "-1~0",
            "notes": ""
          },
          {
            "command": 4,
            "hit_level": "h",
            "damage": 24,
            "start_up_frame": 13,
            "block_frame": -5,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin, Homing"
          },
          {
            "command": "b+1",
            "hit_level": "m",
            "damage": 15,
            "start_up_frame": "15~16 RC",
            "block_frame": "-5~-4",
            "hit_frame": "+8~+9",
            "counter_hit_frame": "+8~+9",
            "notes": ""
          },
          {
            "command": "b+2",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": 18,
            "block_frame": -12,
            "hit_frame": -2,
            "counter_hit_frame": -2,
            "notes": ""
          },
          {
            "command": "b+3",
            "hit_level": "m",
            "damage": 26,
            "start_up_frame": "20~21",
            "block_frame": "-8~-7",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Homing"
          },
          {
            "command": "b+4",
            "hit_level": "m (TJ)",
            "damage": 17,
            "start_up_frame": "15~16",
            "block_frame": "-12~-11",
            "hit_frame": "-3~-2",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "f+1",
            "hit_level": "h",
            "damage": 7,
            "start_up_frame": 10,
            "block_frame": 1,
            "hit_frame": 8,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": "f+2",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": 17,
            "block_frame": -4,
            "hit_frame": 7,
            "counter_hit_frame": 7,
            "notes": ""
          },
          {
            "command": "f+3",
            "hit_level": "h",
            "damage": 13,
            "start_up_frame": "14~15",
            "block_frame": "-14~-13",
            "hit_frame": "-3~-2",
            "counter_hit_frame": "-3~-2",
            "notes": ""
          },
          {
            "command": "f+4",
            "hit_level": "m",
            "damage": 14,
            "start_up_frame": 16,
            "block_frame": -12,
            "hit_frame": -2,
            "counter_hit_frame": -2,
            "notes": "Homing"
          },
          {
            "command": "f, F+1",
            "hit_level": "h",
            "damage": 7,
            "start_up_frame": "10(11~)",
            "block_frame": 1,
            "hit_frame": 8,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": "f, F+2",
            "hit_level": "m (TJ)",
            "damage": 18,
            "start_up_frame": "16~17 (17~)",
            "block_frame": "-18~-17",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, F+3",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": "18~19 (19~)",
            "block_frame": "-18~-17",
            "hit_frame": "-6~-5",
            "counter_hit_frame": "-6~-5",
            "notes": ""
          },
          {
            "command": "f, F+4",
            "hit_level": "m",
            "damage": 18,
            "start_up_frame": "19~22 (20~)",
            "block_frame": "-11~-8",
            "hit_frame": "Throw(+5OB)",
            "counter_hit_frame": "Throw(+5OB)",
            "notes": ""
          },
          {
            "command": "d+1",
            "hit_level": "Sm (TC)",
            "damage": 5,
            "start_up_frame": "10 RC(cs4)",
            "block_frame": -5,
            "hit_frame": 6,
            "counter_hit_frame": 6,
            "notes": ""
          },
          {
            "command": "d+2",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": "24~25",
            "block_frame": "-14~-13",
            "hit_frame": "+2~+3 OC",
            "counter_hit_frame": "+2~+3 OC",
            "notes": ""
          },
          {
            "command": "d+3",
            "hit_level": "l (TJ), (Special) (TC)",
            "damage": 17,
            "start_up_frame": "23?s~",
            "block_frame": "-19?s~",
            "hit_frame": "+9~+13?",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d+4",
            "hit_level": "l",
            "damage": 15,
            "start_up_frame": 17,
            "block_frame": -16,
            "hit_frame": -5,
            "counter_hit_frame": -5,
            "notes": ""
          },
          {
            "command": "d/b+1",
            "hit_level": "(Special) (TC)",
            "damage": "",
            "start_up_frame": "RC(cs4)",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "d/b+2",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": 18,
            "block_frame": -18,
            "hit_frame": -5,
            "counter_hit_frame": -5,
            "notes": ""
          },
          {
            "command": "d/b+3",
            "hit_level": "l (TC)",
            "damage": 11,
            "start_up_frame": "16 RC(cs4)",
            "block_frame": "-12?",
            "hit_frame": "-2?",
            "counter_hit_frame": 5,
            "notes": ""
          },
          {
            "command": "d/b+4",
            "hit_level": "l (TC)",
            "damage": 23,
            "start_up_frame": "23~24 (cs6)",
            "block_frame": "-18~-17",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "FC+1",
            "hit_level": "Sm (TC)",
            "damage": 5,
            "start_up_frame": "10 RC",
            "block_frame": -5,
            "hit_frame": 6,
            "counter_hit_frame": 6,
            "notes": ""
          },
          {
            "command": "FC+2",
            "hit_level": "Sm (TC)",
            "damage": 8,
            "start_up_frame": "11 RC",
            "block_frame": -4,
            "hit_frame": 7,
            "counter_hit_frame": 7,
            "notes": ""
          },
          {
            "command": "FC+3",
            "hit_level": "l (TC)",
            "damage": 12,
            "start_up_frame": "16 RC",
            "block_frame": -17,
            "hit_frame": -3,
            "counter_hit_frame": -3,
            "notes": ""
          },
          {
            "command": "FC+4",
            "hit_level": "l (TC)",
            "damage": 10,
            "start_up_frame": "12 RC",
            "block_frame": -15,
            "hit_frame": -4,
            "counter_hit_frame": -4,
            "notes": ""
          },
          {
            "command": "WS+1",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": "13?",
            "block_frame": -12,
            "hit_frame": -1,
            "counter_hit_frame": -1,
            "notes": ""
          },
          {
            "command": "WS+2",
            "hit_level": "m",
            "damage": 24,
            "start_up_frame": "17~18",
            "block_frame": "-13~-12",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "WS+3",
            "hit_level": "m, (Special)",
            "damage": 18,
            "start_up_frame": "19 Air",
            "block_frame": -137,
            "hit_frame": -124,
            "counter_hit_frame": -124,
            "notes": ""
          },
          {
            "command": "WS+4",
            "hit_level": "m",
            "damage": 15,
            "start_up_frame": 11,
            "block_frame": -5,
            "hit_frame": 6,
            "counter_hit_frame": 6,
            "notes": ""
          },
          {
            "command": "d/f+1",
            "hit_level": "m",
            "damage": 10,
            "start_up_frame": 13,
            "block_frame": -6,
            "hit_frame": 5,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": "d/f+2",
            "hit_level": "m",
            "damage": 16,
            "start_up_frame": "16~17",
            "block_frame": "-9~-8",
            "hit_frame": "Launch (JG?)(+7)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "d/f+3",
            "hit_level": "m",
            "damage": 14,
            "start_up_frame": 16,
            "block_frame": -12,
            "hit_frame": -1,
            "counter_hit_frame": -1,
            "notes": ""
          },
          {
            "command": "d/f+4",
            "hit_level": "m",
            "damage": 13,
            "start_up_frame": 12,
            "block_frame": -7,
            "hit_frame": 4,
            "counter_hit_frame": 4,
            "notes": ""
          },
          {
            "command": "u/b or u or u/f+1",
            "hit_level": "m (TJ)",
            "damage": 12,
            "start_up_frame": 18,
            "block_frame": -8,
            "hit_frame": 3,
            "counter_hit_frame": 3,
            "notes": ""
          },
          {
            "command": "u/b or u or u/f+2",
            "hit_level": "h",
            "damage": 17,
            "start_up_frame": "15~16",
            "block_frame": "-12~-11",
            "hit_frame": "+9~+10 GB",
            "counter_hit_frame": "+9~+10 GB",
            "notes": ""
          },
          {
            "command": "u/b or u or u/f+3",
            "hit_level": "m (TJ)",
            "damage": 15,
            "start_up_frame": "20( Air)",
            "block_frame": -55,
            "hit_frame": "-29(SH)",
            "counter_hit_frame": "-29(SH)",
            "notes": ""
          },
          {
            "command": "u/b+4",
            "hit_level": "m (TJ)",
            "damage": 10,
            "start_up_frame": "17~18",
            "block_frame": "-9~-8",
            "hit_frame": "+7~+8",
            "counter_hit_frame": "+7~+8",
            "notes": ""
          },
          {
            "command": "u or u/f+4",
            "hit_level": "m (TJ)",
            "damage": 10,
            "start_up_frame": "15~16",
            "block_frame": "-15~-14?",
            "hit_frame": "+",
            "counter_hit_frame": "+",
            "notes": ""
          },
          {
            "command": "SS+1",
            "hit_level": "h",
            "damage": 7,
            "start_up_frame": "10(11~)",
            "block_frame": 1,
            "hit_frame": 8,
            "counter_hit_frame": 8,
            "notes": ""
          },
          {
            "command": "SS+2",
            "hit_level": "h",
            "damage": 10,
            "start_up_frame": "12(13~)",
            "block_frame": -6,
            "hit_frame": 5,
            "counter_hit_frame": 5,
            "notes": ""
          },
          {
            "command": "SS+3",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": "14~15 (15~)",
            "block_frame": "-12~-11",
            "hit_frame": "-1~0",
            "counter_hit_frame": "-1~0",
            "notes": ""
          },
          {
            "command": "SS+4",
            "hit_level": "l",
            "damage": 15,
            "start_up_frame": "24(33~)",
            "block_frame": -12,
            "hit_frame": -1,
            "counter_hit_frame": 7,
            "notes": ""
          },
          {
            "command": "BT 1 or 2",
            "hit_level": "h",
            "damage": 15,
            "start_up_frame": 8,
            "block_frame": -8,
            "hit_frame": 3,
            "counter_hit_frame": 3,
            "notes": ""
          },
          {
            "command": "BT 3",
            "hit_level": "h",
            "damage": 25,
            "start_up_frame": 10,
            "block_frame": -8,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "BT 4",
            "hit_level": "m (TJ)",
            "damage": 20,
            "start_up_frame": "16~17 RBT",
            "block_frame": "-3~-2",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "BT d+1 or 2",
            "hit_level": "Sm",
            "damage": 10,
            "start_up_frame": "10s",
            "block_frame": -2,
            "hit_frame": 9,
            "counter_hit_frame": 9,
            "notes": ""
          },
          {
            "command": "BT d+3 or 4",
            "hit_level": "l",
            "damage": 12,
            "start_up_frame": "10s",
            "block_frame": -11,
            "hit_frame": 3,
            "counter_hit_frame": 3,
            "notes": ""
          }
        ]
      },
      {
        "name": "Asuka",
        "motto": "",
        "img": "http://tk7.tekken.com/assets/images/fighters-final/asuka-standard/thumbnail-headshot.png",
        "special_moves":[
          {
            "command": "in rage d/f+1+2",
            "hit_level": "m",
            "damage": 55,
            "start_up_frame": "20 pc8~17",
            "block_frame": -22,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Rage art"
          },
          {
            "command": "in rage f, F+1+2",
            "hit_level": "m",
            "damage": 30,
            "start_up_frame": "21(22~)",
            "block_frame": "+11~+12g",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": "Rage art"
          },
          {
            "command": 1,
            "hit_level": "h",
            "damage": 8,
            "start_up_frame": 10,
            "block_frame": -2,
            "hit_frame": 9,
            "counter_hit_frame": 9,
            "notes": ""
          },
          {
            "command": "1, 1",
            "hit_level": "h, m",
            "damage": "8,15",
            "start_up_frame": 10,
            "block_frame": -7,
            "hit_frame": 4,
            "counter_hit_frame": 4,
            "notes": ""
          },
          {
            "command": "1, 2",
            "hit_level": "h, m",
            "damage": "8,9",
            "start_up_frame": 10,
            "block_frame": "-8~-7",
            "hit_frame": "+3~+4a",
            "counter_hit_frame": "+3~+4a",
            "notes": ""
          },
          {
            "command": "1, 2, 3",
            "hit_level": "h, m, m",
            "damage": "8,9,24",
            "start_up_frame": 10,
            "block_frame": "-2~0",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "1, 2, 3, *, n (two spins)",
            "hit_level": "h, m, m",
            "damage": "8,9,26",
            "start_up_frame": 10,
            "block_frame": "+6~+7",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "1, 2, 3, * (three spins)",
            "hit_level": "h, m, !",
            "damage": "8,9,28",
            "start_up_frame": 10,
            "block_frame": "KND",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "1, 2, 3, B (Cancel)",
            "hit_level": "h, m",
            "damage": "8,9",
            "start_up_frame": 10,
            "block_frame": "-18~-17",
            "hit_frame": "-7~-6a",
            "counter_hit_frame": "-7~-6a",
            "notes": ""
          },
          {
            "command": "1, 2, 4",
            "hit_level": "h, m, m",
            "damage": "8,9,20",
            "start_up_frame": 10,
            "block_frame": "-12~-11",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "1, 3",
            "hit_level": "h, l",
            "damage": "8,10",
            "start_up_frame": 10,
            "block_frame": -11,
            "hit_frame": 0,
            "counter_hit_frame": 0,
            "notes": ""
          },
          {
            "command": "1, 4",
            "hit_level": "h, l (TC)(LCT)",
            "damage": "8,14",
            "start_up_frame": "cs6~",
            "block_frame": "-11~-9",
            "hit_frame": "0~+2",
            "counter_hit_frame": "+3~+5",
            "notes": ""
          },
          {
            "command": 2,
            "hit_level": "h",
            "damage": 9,
            "start_up_frame": 12,
            "block_frame": -11,
            "hit_frame": 0,
            "counter_hit_frame": 0,
            "notes": ""
          },
          {
            "command": "2, 1",
            "hit_level": "h, h",
            "damage": "9,10",
            "start_up_frame": 12,
            "block_frame": "-3~-2",
            "hit_frame": "+8~+9",
            "counter_hit_frame": "+8~+9",
            "notes": ""
          },
          {
            "command": "2, 1, 1+2",
            "hit_level": "h, h, hh",
            "damage": "9,10,8,20",
            "start_up_frame": 12,
            "block_frame": "-9~-8",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "2, 3",
            "hit_level": "h, m (TJ)",
            "damage": "9,20",
            "start_up_frame": "js18~",
            "block_frame": "-19~-18",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": 3,
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": 14,
            "block_frame": -7,
            "hit_frame": 9,
            "counter_hit_frame": 9,
            "notes": ""
          },
          {
            "command": "3, 1",
            "hit_level": "m, m?",
            "damage": "17,17",
            "start_up_frame": 14,
            "block_frame": "-11~-10",
            "hit_frame": "+2~+3",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": 4,
            "hit_level": "h",
            "damage": 18,
            "start_up_frame": 11,
            "block_frame": -7,
            "hit_frame": 7,
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "3~4",
            "hit_level": "l (TC)",
            "damage": 22,
            "start_up_frame": "26~28s (27~) cs6~",
            "block_frame": -26,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "1+2",
            "hit_level": "m",
            "damage": 21,
            "start_up_frame": "16~17",
            "block_frame": "-9~-8",
            "hit_frame": "CS",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "3+4",
            "hit_level": "mm (TJ)",
            "damage": "10,21",
            "start_up_frame": "23,30~32 js5~",
            "block_frame": "-6~-4",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "3+4, (d/b, d or d/f)",
            "hit_level": "mm (TJ)",
            "damage": "10,21",
            "start_up_frame": "23, 30~32s",
            "block_frame": "-6~-4",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "1+4 (First hit only)",
            "hit_level": "l",
            "damage": 5,
            "start_up_frame": 14,
            "block_frame": -19,
            "hit_frame": -8,
            "counter_hit_frame": -8,
            "notes": ""
          },
          {
            "command": "1+4",
            "hit_level": "lh",
            "damage": "5,8",
            "start_up_frame": "14,31",
            "block_frame": "-3(-19s)",
            "hit_frame": 9,
            "counter_hit_frame": 9,
            "notes": ""
          },
          {
            "command": "1+4, 2",
            "hit_level": "lh, h",
            "damage": "5,8,10",
            "start_up_frame": "14,31",
            "block_frame": -2,
            "hit_frame": 9,
            "counter_hit_frame": 9,
            "notes": ""
          },
          {
            "command": "1+4, 2, 1",
            "hit_level": "lh, h, h",
            "damage": "5,8,10,12",
            "start_up_frame": "14,31",
            "block_frame": -2,
            "hit_frame": 9,
            "counter_hit_frame": 9,
            "notes": ""
          },
          {
            "command": "1+4, 2, 4",
            "hit_level": "lh, h, m",
            "damage": "5,8,10,23",
            "start_up_frame": "14,31",
            "block_frame": -9,
            "hit_frame": 4,
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "1+4, 2, d+4",
            "hit_level": "lh, h, l",
            "damage": "5,8,10,15",
            "start_up_frame": "cs10~",
            "block_frame": -23,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "1+4, 3",
            "hit_level": "lh, m",
            "damage": "5,8,24",
            "start_up_frame": "10~",
            "block_frame": "-2~0",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "1+4, 3, b (Cancel)",
            "hit_level": "lh",
            "damage": "5,8",
            "start_up_frame": "10~",
            "block_frame": "-20(37s)",
            "hit_frame": -9,
            "counter_hit_frame": -9,
            "notes": ""
          },
          {
            "command": "2+3",
            "hit_level": "h(Absorbs 1 h/m hit)",
            "damage": 21,
            "start_up_frame": "28~29 (7~)",
            "block_frame": "0~+1",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f+2",
            "hit_level": "m?",
            "damage": 20,
            "start_up_frame": "17~18",
            "block_frame": "-18~-17",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "f+2, d/b or d or D/F (Cancel)",
            "hit_level": "(Special)?",
            "damage": "",
            "start_up_frame": "s",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "f+3",
            "hit_level": "m",
            "damage": 24,
            "start_up_frame": "14~16 (31~33)",
            "block_frame": "-2~0",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "f+3, *, n (two spins)",
            "hit_level": "m",
            "damage": 26,
            "start_up_frame": "12~13 (52~53)",
            "block_frame": "+6~+7",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "f+3, * (three spins)",
            "hit_level": "!",
            "damage": 28,
            "start_up_frame": "12~13 (70~71)",
            "block_frame": "KND",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "f+4",
            "hit_level": "h",
            "damage": 21,
            "start_up_frame": "19~21",
            "block_frame": "+3~+5",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Homing, Tail spin"
          },
          {
            "command": "f+1+2",
            "hit_level": "h",
            "damage": 26,
            "start_up_frame": "15~16 pc8~14",
            "block_frame": "-11~-10",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Power crush"
          },
          {
            "command": "d/f+1",
            "hit_level": "m",
            "damage": 10,
            "start_up_frame": "13~14",
            "block_frame": "-3~-2",
            "hit_frame": "+8~+9",
            "counter_hit_frame": "+8~+9",
            "notes": ""
          },
          {
            "command": "d/f+1, 2",
            "hit_level": "m, h(, (throw))",
            "damage": "10,13(,20)",
            "start_up_frame": "13~14",
            "block_frame": -1,
            "hit_frame": "Throw(KND)",
            "counter_hit_frame": "Throw(KND)",
            "notes": ""
          },
          {
            "command": "d/f+1, 4",
            "hit_level": "m, m",
            "damage": "10,2",
            "start_up_frame": "13~14",
            "block_frame": "-12~-11",
            "hit_frame": "KND",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "d/f+2",
            "hit_level": "m",
            "damage": 14,
            "start_up_frame": "15~16",
            "block_frame": "-6~-5",
            "hit_frame": "Launch (JG?)(+5a)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "d/f+3",
            "hit_level": "m",
            "damage": 22,
            "start_up_frame": "20~21",
            "block_frame": "-8~-7",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d/f+4",
            "hit_level": "m",
            "damage": 16,
            "start_up_frame": 12,
            "block_frame": -9,
            "hit_frame": 2,
            "counter_hit_frame": 2,
            "notes": ""
          },
          {
            "command": "d+2",
            "hit_level": "m",
            "damage": 18,
            "start_up_frame": 18,
            "block_frame": "-4s",
            "hit_frame": "+9s",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d+1+2 or FC+d/b or d+1+2",
            "hit_level": "l (TC)",
            "damage": 20,
            "start_up_frame": "20 cs15~",
            "block_frame": -18,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d+3+4",
            "hit_level": "lh (TJ)",
            "damage": "5,20",
            "start_up_frame": "14,24 js5~",
            "block_frame": "-6(-25s)",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "d/b+1",
            "hit_level": "m (TC)",
            "damage": 13,
            "start_up_frame": "14 cs6~13",
            "block_frame": -9,
            "hit_frame": 4,
            "counter_hit_frame": 9,
            "notes": ""
          },
          {
            "command": "d/b+1, 2",
            "hit_level": "m (TC), l",
            "damage": "13,17",
            "start_up_frame": "cs15~",
            "block_frame": "-13~-12",
            "hit_frame": "+3~+4s",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d/b+2",
            "hit_level": "m",
            "damage": 22,
            "start_up_frame": "23~24 cs3~20",
            "block_frame": "-13~-12",
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "d/b+3",
            "hit_level": "l",
            "damage": 16,
            "start_up_frame": 21,
            "block_frame": -12,
            "hit_frame": "+4s",
            "counter_hit_frame": "+4s",
            "notes": ""
          },
          {
            "command": "b+1",
            "hit_level": "l (TC)(, (throw))",
            "damage": 17,
            "start_up_frame": "29~30s cs6~",
            "block_frame": "-10~-9",
            "hit_frame": "+6~+7",
            "counter_hit_frame": "Throw(KND)",
            "notes": ""
          },
          {
            "command": "b+2",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": 15,
            "block_frame": "-4s",
            "hit_frame": "+1s",
            "counter_hit_frame": "+1s",
            "notes": ""
          },
          {
            "command": "b+2, 1",
            "hit_level": "m, m",
            "damage": "12,14",
            "start_up_frame": 15,
            "block_frame": -7,
            "hit_frame": 4,
            "counter_hit_frame": 4,
            "notes": ""
          },
          {
            "command": "b+2, 4",
            "hit_level": "m, l(LCT)",
            "damage": "12,14",
            "start_up_frame": "cs15~",
            "block_frame": "-11~-9",
            "hit_frame": "0~+2",
            "counter_hit_frame": "+3~+5",
            "notes": ""
          },
          {
            "command": "b+2, 1+2",
            "hit_level": "m, h",
            "damage": "12,7",
            "start_up_frame": "15~",
            "block_frame": -10,
            "hit_frame": 1,
            "counter_hit_frame": 1,
            "notes": ""
          },
          {
            "command": "b+2, 1+2, d (Cancel)",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": "15~s",
            "block_frame": "-6s",
            "hit_frame": "-1s",
            "counter_hit_frame": "-1s",
            "notes": ""
          },
          {
            "command": "b+2, 1+2, 4",
            "hit_level": "m, h, m",
            "damage": "12,7,20",
            "start_up_frame": "15~",
            "block_frame": "-13~-12",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "b+3",
            "hit_level": "m (TJ)",
            "damage": 15,
            "start_up_frame": "16~17 js10~",
            "block_frame": "-19~-18",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "b+3, 2",
            "hit_level": "m, m?",
            "damage": "15,20",
            "start_up_frame": "16~17 10~",
            "block_frame": "-20~-19",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "b+3, 2, (d/b, d or d/f) (Cancel)",
            "hit_level": "m, (Special)?",
            "damage": 15,
            "start_up_frame": "16~17 10~s",
            "block_frame": "-33~-32",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "b+3, 4",
            "hit_level": "m (TJ), l (TC)(LCT)",
            "damage": "15,14",
            "start_up_frame": "cs1~",
            "block_frame": "-11~-9",
            "hit_frame": "0~+2",
            "counter_hit_frame": "+3~+5",
            "notes": ""
          },
          {
            "command": "b+4",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": "15~16",
            "block_frame": "-8~-7",
            "hit_frame": "+8~+9",
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "b+4, 2",
            "hit_level": "m, m",
            "damage": "17,12",
            "start_up_frame": "15~16",
            "block_frame": "-12~-11",
            "hit_frame": "+4~+5s",
            "counter_hit_frame": "+4~+5s",
            "notes": ""
          },
          {
            "command": "b+4, 2, 3",
            "hit_level": "m, m, m",
            "damage": "17,12,21",
            "start_up_frame": "15~16",
            "block_frame": "-16~-13",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "b+1+4",
            "hit_level": "hl",
            "damage": "15,8",
            "start_up_frame": "12,29~30",
            "block_frame": "-8~-7",
            "hit_frame": "+5~+6",
            "counter_hit_frame": "+5~+6 +7~+8",
            "notes": ""
          },
          {
            "command": "b+1+4 (First hit only, Second hit miss)",
            "hit_level": "h",
            "damage": 15,
            "start_up_frame": 12,
            "block_frame": -25,
            "hit_frame": -14,
            "counter_hit_frame": -14,
            "notes": ""
          },
          {
            "command": "b+1+4, 3",
            "hit_level": "hl, l?",
            "damage": "15,8,18",
            "start_up_frame": 12,
            "block_frame": "-13~-12",
            "hit_frame": "-2~-1",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "b+1+4, 4",
            "hit_level": "hl, m",
            "damage": "15,8,23",
            "start_up_frame": 12,
            "block_frame": "-14~-13",
            "hit_frame": "+5b",
            "counter_hit_frame": "+5b",
            "notes": "Tail spin"
          },
          {
            "command": "u/f+2",
            "hit_level": "h (throw)",
            "damage": "20(,20)",
            "start_up_frame": 14,
            "block_frame": -7,
            "hit_frame": "Throw(KND)",
            "counter_hit_frame": "Throw(KND)",
            "notes": ""
          },
          {
            "command": "u/f+2 (No throw)",
            "hit_level": "h",
            "damage": 20,
            "start_up_frame": 14,
            "block_frame": -7,
            "hit_frame": "+",
            "counter_hit_frame": "+",
            "notes": ""
          },
          {
            "command": "u/b or u or u/f+3",
            "hit_level": "m (TJ)",
            "damage": 17,
            "start_up_frame": "20~21 js11~",
            "block_frame": "-3~-2",
            "hit_frame": "+8~+9",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "u/b+4",
            "hit_level": "m (TJ)",
            "damage": 25,
            "start_up_frame": "20~21 js9~",
            "block_frame": "-15~-14",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "u or u/f+4",
            "hit_level": "m (TJ)",
            "damage": 25,
            "start_up_frame": "20~21 js9~",
            "block_frame": "-13~-12",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "f, F+1",
            "hit_level": "m",
            "damage": 30,
            "start_up_frame": "23~24 (24~)",
            "block_frame": "+4~+5",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, F+2",
            "hit_level": "m",
            "damage": 16,
            "start_up_frame": "15~16 (16~)",
            "block_frame": "-13~-12",
            "hit_frame": "-3~-2",
            "counter_hit_frame": "-3~-2",
            "notes": ""
          },
          {
            "command": "f, F+2, 1",
            "hit_level": "m, h",
            "damage": "16,21",
            "start_up_frame": "15~16 (16~)",
            "block_frame": "-5~-4",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, F+2, 3",
            "hit_level": "m, m",
            "damage": "16,21",
            "start_up_frame": "15~16 (16~)",
            "block_frame": "-8~-7",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f, F+2, 1+2",
            "hit_level": "m, m",
            "damage": "16,25",
            "start_up_frame": "15~16 (16~)",
            "block_frame": "-13~-12",
            "hit_frame": "ED",
            "counter_hit_frame": "ED",
            "notes": ""
          },
          {
            "command": "f, F+3",
            "hit_level": "m?",
            "damage": 23,
            "start_up_frame": "20~21s (21~)",
            "block_frame": "-9~-8",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Homing"
          },
          {
            "command": "f, F+4",
            "hit_level": "h (TJ)",
            "damage": 28,
            "start_up_frame": "20~21 (21~) js6~",
            "block_frame": "-3~-2",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "u/b, b",
            "hit_level": "(Special) (TJ)",
            "damage": "",
            "start_up_frame": "a",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "u/b, b, 3 or f, f, f+3",
            "hit_level": "m (TJ)",
            "damage": 32,
            "start_up_frame": "24~28 (69~) js3~",
            "block_frame": "0~+4",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "WS+1",
            "hit_level": "m",
            "damage": 12,
            "start_up_frame": "15~16",
            "block_frame": "-7~-6",
            "hit_frame": "+4~+5",
            "counter_hit_frame": "+4~+5",
            "notes": ""
          },
          {
            "command": "WS+1, 4",
            "hit_level": "m, h",
            "damage": "12,20",
            "start_up_frame": "15~16",
            "block_frame": -12,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "WS+2",
            "hit_level": "m",
            "damage": 18,
            "start_up_frame": "13~14",
            "block_frame": "-8~-7",
            "hit_frame": "+8~+9",
            "counter_hit_frame": "+8~+9",
            "notes": ""
          },
          {
            "command": "WS+3",
            "hit_level": "m",
            "damage": 20,
            "start_up_frame": "19~20 js18~",
            "block_frame": "-16~-15",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "WS+4",
            "hit_level": "m",
            "damage": 15,
            "start_up_frame": "11~12",
            "block_frame": "-3~-2",
            "hit_frame": "+8~+9",
            "counter_hit_frame": "+8~+9",
            "notes": ""
          },
          {
            "command": "WS+1+2",
            "hit_level": "m?",
            "damage": 20,
            "start_up_frame": 21,
            "block_frame": -2,
            "hit_frame": 5,
            "counter_hit_frame": "hKZD (17)",
            "notes": ""
          },
          {
            "command": "WS+1+2, D (Cancel)",
            "hit_level": "(Special)?",
            "damage": "",
            "start_up_frame": "s",
            "block_frame": "",
            "hit_frame": "",
            "counter_hit_frame": "",
            "notes": ""
          },
          {
            "command": "FC+3+4 WS+3+4",
            "hit_level": "mm (TJ)",
            "damage": "10,10",
            "start_up_frame": "21~22, 31~32 js5~22",
            "block_frame": "-6~-5",
            "hit_frame": "+5~+6s",
            "counter_hit_frame": "+5~+6s",
            "notes": ""
          },
          {
            "command": "FC+3+4, D",
            "hit_level": "mm (TJ)",
            "damage": "10,10",
            "start_up_frame": "21~22, 31~32s js5~22",
            "block_frame": "-6~-5",
            "hit_frame": "+5~+6s",
            "counter_hit_frame": "+5~+6s",
            "notes": ""
          },
          {
            "command": "FC+3+4, 3",
            "hit_level": "mm (TJ), mm (TJ)",
            "damage": "10,10,10,10",
            "start_up_frame": "js21~",
            "block_frame": "0~+1s",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "FC+3+4, 3, D",
            "hit_level": "mm (TJ), mm (TJ)",
            "damage": "10,10,10,10",
            "start_up_frame": "s js21~",
            "block_frame": "0~+1s",
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "FC+d/f+2",
            "hit_level": "l (TC)",
            "damage": 10,
            "start_up_frame": "16~17s cs1~",
            "block_frame": "-11~-10",
            "hit_frame": "0~+1",
            "counter_hit_frame": "+16~+17",
            "notes": ""
          },
          {
            "command": "FC+d/f+3",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": "18 cs1~17",
            "block_frame": -13,
            "hit_frame": 3,
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "SS+2",
            "hit_level": "m",
            "damage": 23,
            "start_up_frame": "13~14 (22~)",
            "block_frame": "-9~-8",
            "hit_frame": "KND(KND)",
            "counter_hit_frame": "KND(KND)",
            "notes": ""
          },
          {
            "command": "SS+4",
            "hit_level": "h",
            "damage": 18,
            "start_up_frame": "17~21 (26~)",
            "block_frame": "-6~-2",
            "hit_frame": "+7~+11",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f+1",
            "hit_level": "m",
            "damage": 17,
            "start_up_frame": 20,
            "block_frame": -7,
            "hit_frame": 4,
            "counter_hit_frame": 4,
            "notes": ""
          },
          {
            "command": "f+1, 3",
            "hit_level": "m, m",
            "damage": "17,17",
            "start_up_frame": 20,
            "block_frame": "-5~-4",
            "hit_frame": "+6~+7",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f+1, 3, 1",
            "hit_level": "m, m, h",
            "damage": "17,17,12",
            "start_up_frame": 20,
            "block_frame": -8,
            "hit_frame": 3,
            "counter_hit_frame": 3,
            "notes": ""
          },
          {
            "command": "f+1, 4",
            "hit_level": "m, lh (TJ)",
            "damage": "17,5,20",
            "start_up_frame": "js10~",
            "block_frame": "-6(-25s)",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "f+1, d+4",
            "hit_level": "m, l (TC)",
            "damage": "17,22",
            "start_up_frame": "s cs6~",
            "block_frame": -26,
            "hit_frame": "KND",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "f+1, d+4, D/B (Cancel)",
            "hit_level": "m, (Special)",
            "damage": 17,
            "start_up_frame": "6~s",
            "block_frame": -26,
            "hit_frame": -15,
            "counter_hit_frame": -15,
            "notes": ""
          },
          {
            "command": "d/b+4",
            "hit_level": "l (TC)(LCT)",
            "damage": 14,
            "start_up_frame": "22~24 cs6~",
            "block_frame": "-11~-9",
            "hit_frame": "0~+2",
            "counter_hit_frame": "+3~+5",
            "notes": ""
          },
          {
            "command": "d/b+4, D",
            "hit_level": "l (TC)(LCT)",
            "damage": 14,
            "start_up_frame": "22~24s cs6~",
            "block_frame": "-11~-9",
            "hit_frame": "0~+2",
            "counter_hit_frame": "+3~+5",
            "notes": ""
          },
          {
            "command": "d/b+4, 4",
            "hit_level": "l (TC), l (TC)(LCT)",
            "damage": "14,15",
            "start_up_frame": "cs1~",
            "block_frame": "-7~-5",
            "hit_frame": "+4~+6",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d/b+4, 4, D",
            "hit_level": "l (TC), l (TC)(LCT)",
            "damage": "15,15",
            "start_up_frame": "s cs1~",
            "block_frame": "-11~-9",
            "hit_frame": "0~+2",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d/b+4, 4, 4",
            "hit_level": "l (TC), l (TC), l (TC)(LCT)",
            "damage": "18,20,21",
            "start_up_frame": "cs1~",
            "block_frame": "-7~-5",
            "hit_frame": "+4~+6",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "d/b+4, 4, 4, D",
            "hit_level": "l (TC), l (TC), l (TC)(LCT)",
            "damage": "18,20,21",
            "start_up_frame": "s cs1~",
            "block_frame": "-11~-9",
            "hit_frame": "0~+2",
            "counter_hit_frame": "KND",
            "notes": ""
          },
          {
            "command": "LCT 3",
            "hit_level": "h(LCT)",
            "damage": 21,
            "start_up_frame": "1~",
            "block_frame": -3,
            "hit_frame": "Launch",
            "counter_hit_frame": "Launch",
            "notes": ""
          },
          {
            "command": "LCT 1+4",
            "hit_level": "lh(LCT)",
            "damage": "5,8",
            "start_up_frame": "1~",
            "block_frame": "-3(-19s)",
            "hit_frame": 9,
            "counter_hit_frame": 9,
            "notes": ""
          }
        ],
        "basic_moves":[
          {
            "command": 1,
            "hit_level": "h",
            "damage": 10,
            "start_up_frame": 10,
            "block_frame": -2,
            "hit_frame": 9,
            "counter_hit_frame": 9,
            "notes": ""
          },
          {
            "command": 2,
            "hit_level": "h",
            "damage": 12,
            "start_up_frame": 12,
            "block_frame": -11,
            "hit_frame": 0,
            "counter_hit_frame": 0,
            "notes": ""
          },
          {
            "command": 3,
            "hit_level": "m",
            "damage": 22,
            "start_up_frame": 14,
            "block_frame": -7,
            "hit_frame": 9,
            "counter_hit_frame": 9,
            "notes": ""
          },
          {
            "command": 4,
            "hit_level": "h",
            "damage": 24,
            "start_up_frame": 11,
            "block_frame": -9,
            "hit_frame": 7,
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "b+1",
            "hit_level": "l (TC)",
            "damage": 25,
            "start_up_frame": "29 RC",
            "block_frame": -12,
            "hit_frame": 4,
            "counter_hit_frame": "Throw(KND)",
            "notes": ""
          },
          {
            "command": "b+2",
            "hit_level": "m",
            "damage": 16,
            "start_up_frame": 15,
            "block_frame": "-4 OC",
            "hit_frame": "+1 OC",
            "counter_hit_frame": "+1 OC",
            "notes": ""
          },
          {
            "command": "b+3",
            "hit_level": "m (TJ)",
            "damage": "24?",
            "start_up_frame": "16~17",
            "block_frame": "-19~-18?",
            "hit_frame": "Launch (JG?)",
            "counter_hit_frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "b+4",
            "hit_level": "m",
            "damage": 22,
            "start_up_frame": 15,
            "block_frame": -8,
            "hit_frame": 8,
            "counter_hit_frame": "CS",
            "notes": ""
          },
          {
            "command": "f+1",
            "hit_level": "m",
            "damage": 22,
            "start_up_frame": 20,
            "block_frame": -7,
            "hit_frame": 4,
            "Counter hit frame": 4,
            "notes": ""
          },
          {
            "command": "f+2",
            "hit_level": "m",
            "damage": 27,
            "start_up_frame": "17~18",
            "block_frame": "-18~-17",
            "Hit frame": "Launch (JG?)",
            "Counter hit frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "f+3",
            "hit_level": "m",
            "damage": 40,
            "start_up_frame": "31~32",
            "block_frame": "-2~-1",
            "Hit frame": "KND",
            "Counter hit frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "f+4",
            "hit_level": "h",
            "damage": 28,
            "start_up_frame": "19~20",
            "block_frame": "+3~+4",
            "Hit frame": "KND",
            "Counter hit frame": "KND",
            "notes": "Homing, Tail spin"
          },
          {
            "command": "f, F+1",
            "hit_level": "m",
            "damage": "",
            "start_up_frame": "20?(21?~)",
            "block_frame": "+4?",
            "Hit frame": "KND",
            "Counter hit frame": "KND",
            "notes": ""
          },
          {
            "command": "f, F+2",
            "hit_level": "m",
            "damage": 21,
            "start_up_frame": "15(16~)",
            "block_frame": -13,
            "Hit frame": -3,
            "Counter hit frame": -3,
            "notes": ""
          },
          {
            "command": "f, F+3",
            "hit_level": "m (TC)",
            "damage": 31,
            "start_up_frame": "20~21 RC (21~)",
            "block_frame": "-9~-8",
            "Hit frame": "KND",
            "Counter hit frame": "KND",
            "notes": "Homing"
          },
          {
            "command": "f, F+4",
            "hit_level": "h (TJ)",
            "damage": 33,
            "start_up_frame": "22(23~)",
            "block_frame": -3,
            "Hit frame": "KND",
            "Counter hit frame": "KND",
            "notes": "Tail spin"
          },
          {
            "command": "d+1",
            "hit_level": "Sm",
            "damage": 6,
            "start_up_frame": "10 RC",
            "block_frame": -5,
            "Hit frame": 6,
            "Counter hit frame": 6,
            "notes": ""
          },
          {
            "command": "d+2",
            "hit_level": "m",
            "damage": 24,
            "start_up_frame": 18,
            "block_frame": "-4 OC",
            "Hit frame": "+9 OC",
            "Counter hit frame": "KND",
            "notes": ""
          },
          {
            "command": "d+3",
            "hit_level": "l (TC)",
            "damage": 16,
            "start_up_frame": "16 RC",
            "block_frame": -17,
            "Hit frame": -3,
            "Counter hit frame": -3,
            "notes": ""
          },
          {
            "command": "d+4",
            "hit_level": "l (TC)",
            "damage": 9,
            "start_up_frame": "12 RC",
            "block_frame": -13,
            "Hit frame": -2,
            "Counter hit frame": -2,
            "notes": ""
          },
          {
            "command": "d/b+1",
            "hit_level": "m (TC)",
            "damage": 17,
            "start_up_frame": 14,
            "block_frame": -9,
            "Hit frame": 4,
            "Counter hit frame": 4,
            "notes": ""
          },
          {
            "command": "d/b+2",
            "hit_level": "m (TC)",
            "damage": 29,
            "start_up_frame": 23,
            "block_frame": "-13?",
            "Hit frame": "Launch",
            "Counter hit frame": "Launch",
            "notes": ""
          },
          {
            "command": "d/b+3",
            "hit_level": "l",
            "damage": 20,
            "start_up_frame": 21,
            "block_frame": -12,
            "Hit frame": "+4 OC",
            "Counter hit frame": "+4 OC",
            "notes": ""
          },
          {
            "command": "d/b+4",
            "hit_level": "l (TC)(LCT)",
            "damage": 18,
            "start_up_frame": 22,
            "block_frame": -11,
            "Hit frame": 0,
            "Counter hit frame": 3,
            "notes": ""
          },
          {
            "command": "FC+1",
            "hit_level": "Sm (TC)",
            "damage": 6,
            "start_up_frame": "10 RC",
            "block_frame": -5,
            "Hit frame": 6,
            "Counter hit frame": 6,
            "notes": ""
          },
          {
            "command": "FC+d/b or d+2",
            "hit_level": "Sm (TC)",
            "damage": 10,
            "start_up_frame": "11 RC",
            "block_frame": -4,
            "Hit frame": 7,
            "Counter hit frame": 7,
            "notes": ""
          },
          {
            "command": "FC+d/b or d+3",
            "hit_level": "l (TC)",
            "damage": 16,
            "start_up_frame": "16 RC",
            "block_frame": -17,
            "Hit frame": -3,
            "Counter hit frame": -3,
            "notes": ""
          },
          {
            "command": "FC+4",
            "hit_level": "l (TC)",
            "damage": 13,
            "start_up_frame": "12 RC",
            "block_frame": -15,
            "Hit frame": -4,
            "Counter hit frame": -4,
            "notes": ""
          },
          {
            "command": "WS+1",
            "hit_level": "m",
            "damage": 22,
            "start_up_frame": "15~16",
            "block_frame": "-7~-6",
            "Hit frame": "+4~+5",
            "Counter hit frame": "+4~+5",
            "notes": ""
          },
          {
            "command": "WS+2",
            "hit_level": "m",
            "damage": 24,
            "start_up_frame": "13~14",
            "block_frame": "-8~-7?",
            "Hit frame": "+8~+9?",
            "Counter hit frame": "+8~+9?",
            "notes": ""
          },
          {
            "command": "WS+3",
            "hit_level": "m",
            "damage": 27,
            "start_up_frame": 19,
            "block_frame": "-16?",
            "Hit frame": "Launch (JG?)",
            "Counter hit frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "WS+4",
            "hit_level": "m",
            "damage": 20,
            "start_up_frame": "11~12",
            "block_frame": "-3~-2",
            "Hit frame": "+8~+9",
            "Counter hit frame": "+8~+9",
            "notes": ""
          },
          {
            "command": "d/f+1",
            "hit_level": "m",
            "damage": 13,
            "start_up_frame": "13~14",
            "block_frame": "-3~-2",
            "Hit frame": "+8~+9",
            "Counter hit frame": "+8~+9",
            "notes": ""
          },
          {
            "command": "d/f+2",
            "hit_level": "m",
            "damage": 18,
            "start_up_frame": "15~16",
            "block_frame": "-6~-5",
            "Hit frame": "Launch (JG?)(+5)",
            "Counter hit frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "d/f+3",
            "hit_level": "m",
            "damage": "",
            "start_up_frame": 20,
            "block_frame": -8,
            "Hit frame": "KND",
            "Counter hit frame": "KND",
            "notes": ""
          },
          {
            "command": "d/f+4",
            "hit_level": "m",
            "damage": 21,
            "start_up_frame": 12,
            "block_frame": -9,
            "Hit frame": 2,
            "Counter hit frame": 2,
            "notes": ""
          },
          {
            "command": "u/b or u or u/f+1",
            "hit_level": "m (TJ)",
            "damage": 16,
            "start_up_frame": 18,
            "block_frame": -8,
            "Hit frame": 3,
            "Counter hit frame": 3,
            "notes": ""
          },
          {
            "command": "u/b or u+2",
            "hit_level": "h",
            "damage": 22,
            "start_up_frame": 15,
            "block_frame": -12,
            "Hit frame": 9,
            "Counter hit frame": 9,
            "notes": ""
          },
          {
            "command": "u/f+2",
            "hit_level": "h (throw)",
            "damage": "27(,20)",
            "start_up_frame": 14,
            "block_frame": -9,
            "Hit frame": "KND(Throw)",
            "Counter hit frame": "KND(Throw)",
            "notes": ""
          },
          {
            "command": "u/f+2 (No throw)",
            "hit_level": "h",
            "damage": 27,
            "start_up_frame": 14,
            "block_frame": -9,
            "Hit frame": 7,
            "Counter hit frame": 7,
            "notes": ""
          },
          {
            "command": "u/b or u or u/f+3",
            "hit_level": "m (TJ)",
            "damage": 22,
            "start_up_frame": "20~21",
            "block_frame": "-3~-2?",
            "Hit frame": "+7~+8",
            "Counter hit frame": "KND",
            "notes": ""
          },
          {
            "command": "u/b+4",
            "hit_level": "m (TJ)",
            "damage": 33,
            "start_up_frame": 20,
            "block_frame": -15,
            "Hit frame": "Launch (JG?)",
            "Counter hit frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "u or u/f+4",
            "hit_level": "m (TJ)",
            "damage": 33,
            "start_up_frame": 20,
            "block_frame": -13,
            "Hit frame": "Launch (JG?)",
            "Counter hit frame": "Launch (JG?)",
            "notes": ""
          },
          {
            "command": "SS+1",
            "hit_level": "h",
            "damage": 10,
            "start_up_frame": "10(11~)",
            "block_frame": -2,
            "Hit frame": 9,
            "Counter hit frame": 9,
            "notes": ""
          },
          {
            "command": "SS+2",
            "hit_level": "m",
            "damage": 31,
            "start_up_frame": "13(22~)",
            "block_frame": "-9?",
            "Hit frame": "KND(KND)",
            "Counter hit frame": "KND(KND)",
            "notes": ""
          },
          {
            "command": "SS+3",
            "hit_level": "m",
            "damage": 22,
            "start_up_frame": "14(15~)",
            "block_frame": -7,
            "Hit frame": 9,
            "Counter hit frame": 9,
            "notes": ""
          },
          {
            "command": "SS+4",
            "hit_level": "h",
            "damage": 24,
            "start_up_frame": "17(26~)",
            "block_frame": -6,
            "Hit frame": 7,
            "Counter hit frame": "KND",
            "notes": ""
          },
          {
            "command": "BT 1 or 2",
            "hit_level": "h",
            "damage": 20,
            "start_up_frame": 8,
            "block_frame": -8,
            "Hit frame": 3,
            "Counter hit frame": 3,
            "notes": ""
          },
          {
            "command": "BT 3 or 4",
            "hit_level": "h",
            "damage": 33,
            "start_up_frame": 10,
            "block_frame": -8,
            "Hit frame": "KND",
            "Counter hit frame": "KND",
            "notes": ""
          },
          {
            "command": "BT d+1 or 2",
            "hit_level": "Sm",
            "damage": 10,
            "start_up_frame": "10s",
            "block_frame": -2,
            "Hit frame": 9,
            "Counter hit frame": 9,
            "notes": ""
          },
          {
            "command": "BT d+3 or 4",
            "hit_level": "l",
            "damage": 12,
            "start_up_frame": "10s",
            "block_frame": -11,
            "Hit frame": 3,
            "Counter hit frame": 3,
            "notes": ""
          },
          {
            "command": "Last updated 04.08.2017",
            "hit_level": "",
            "damage": "",
            "start_up_frame": "",
            "block_frame": "",
            "Hit frame": "",
            "Counter hit frame": "",
            "notes": ""
          }
        ]
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
