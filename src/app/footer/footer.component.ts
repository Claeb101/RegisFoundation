import { SocialIcon } from './social_icon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  icons : SocialIcon[];
  constructor() {
    this.icons = [
      {iconClassName: "facebook", link: "https://www.facebook.com/"}, 
      {iconClassName: "twitter", link: "https://www.twitter.com/"}, 
    ]
  }

  ngOnInit(): void {
  }

}
