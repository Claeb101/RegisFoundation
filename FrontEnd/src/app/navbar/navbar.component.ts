import { Globals } from './../globals';
import { Component, OnInit} from '@angular/core';
import { NavPart} from './navPart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mainTitle : String;
  navBarParts : Array<NavPart>;
  logoSrc : String;

  isToggled: Boolean;

  constructor() {
    let ar : NavPart[] = [
      {link: "/about", display: "About"},
      {link: "/bio", display: "Bio"},
      {link: "/leadership", display: "Leadership"},
      {link: "/donate", display: "Donate"},
      {link: "/contact", display: "Contact"},
      //{link: "/help", display: "Help"},
    ];
    this.navBarParts = ar;

    this.logoSrc = "assets/TrustIcon.png";

    this.mainTitle = Globals.mainTitle;
    this.isToggled = false;
  }

  toggle(){
    this.isToggled = !this.isToggled;
  }

  getDisp(){
    if(window.innerWidth >= 900) {
      return "flex";
    } else if(this.isToggled){
      return "block";
    } else {
      return "none";
    }
  }

  ngOnInit(): void {
  }
  
}
