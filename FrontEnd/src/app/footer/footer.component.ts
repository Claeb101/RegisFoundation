import { SocialIcon } from './social_icon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  title : string;

  icons : SocialIcon[];
  address : string;
  email : string;
  phoneNumber : string;
  constructor() {
    this.title = "Connect With Us";

    this.icons = [
      {iconClassName: "facebook", link: "https://www.facebook.com/REGIS-Foundation-393538884407759/"}, 
      {iconClassName: "twitter", link: "https://twitter.com/RegisAns/"}, 
      {iconClassName: "envelope", link: "mailto:2020ansregis@gmail.com"}, 
      {iconClassName: "phone", link: "tel:+918610452131"}, 
    ];

    this.address = "555 Mandhali Vilakku Road, Kalaiyarkoil, Sivagangai, Tamil Nadu, India 630551"
    this.email = "mailto:2020ansregis@gmail.com"
    this.phoneNumber = "tel:+918610452131"
  }

  ngOnInit(): void {
  }

}
