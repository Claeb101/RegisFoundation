import { Globals } from './../../globals';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  backdrop : string;
  title : string;
  width : Number;
  height : Number;

  constructor() {
    this.title= Globals.mainTitle;
    this.backdrop="assets/IntroBG.jpg";
    this.width = 3840;
    this.height = 2160;
  }

  ngOnInit(): void {
  }

}
