import { Component, OnInit } from '@angular/core';
import { NavPart} from './navPart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links : Array<NavPart>;
  constructor() {
    let ar : NavPart[] = new Array<NavPart>();
    // push parts to ar
    this.links = ar;
  }

  ngOnInit(): void {
  }

}
