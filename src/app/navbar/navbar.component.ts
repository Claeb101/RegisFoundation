import { Globals } from './../globals';
import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
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

  @ViewChild('holder') 
  private holder: ElementRef;

  constructor(private renderer: Renderer2) {
    let ar : NavPart[] = [
      {link: "/about", display: "About"},
      {link: "/leadership", display: "Leadership"},
      {link: "/donate", display: "Donate"},
      {link: "/help", display: "Help"},
    ];
    this.navBarParts = ar;

    this.logoSrc = "assets/TrustIcon.png";

    this.mainTitle = Globals.mainTitle;
    this.isToggled = false;
  }

  toggle(){
    this.isToggled = !this.isToggled;
    if(this.isToggled){
      console.log("Toggle", "block");
      this.renderer.setStyle(this.holder.nativeElement, 'display', 'block');
    } else {
      console.log("Toggle", "none")
      this.renderer.setStyle(this.holder.nativeElement, 'display', 'none');
    }
  }

  ngOnInit(): void {
  }
  
}
