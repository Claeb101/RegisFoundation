import { Globals } from './../globals';
import { Component, OnInit } from '@angular/core';
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
  constructor() {
    let ar : NavPart[] = [
      {link: "/donate", display: "Donate"},
      {link: "/about", display: "About"},
      {link: "/leadership", display: "Leadership"},
      {link: "/help", display: "Help"},
    ];
    this.navBarParts = ar;

    this.logoSrc = "assets/TrustIcon.png";

    this.mainTitle = Globals.mainTitle;
  }

  ngOnInit(): void {
  }

}
