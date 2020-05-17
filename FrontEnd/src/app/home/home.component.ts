import { Globals } from './../globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
