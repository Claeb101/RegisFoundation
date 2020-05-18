import { SocialIcon } from './social_icon';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() title : string;

  icons : SocialIcon[];
  address : string;
  email : string;
  phoneNumber : string;
  constructor() {
    this.title = "Connect With Us";

    this.icons = [
      {iconClass: "fab", iconName: "fa-facebook-f", link: "https://www.facebook.com/REGIS-Foundation-393538884407759/"}, 
      {iconClass: "fa", iconName: "fa-twitter", link: "https://twitter.com/RegisAns/"}, 
      {iconClass: "fas", iconName: "fa-envelope", link: "mailto:2020ansregis@gmail.com"}, 
      {iconClass: "fas", iconName: "fa-phone", link: "tel:+918610452131"}, 
    ];

    this.address = "555 Mandhali Vilakku Road, Kalaiyarkoil, Sivagangai, Tamil Nadu, India 630551"
    this.email = "mailto:2020ansregis@gmail.com"
    this.phoneNumber = "tel:+918610452131"
  }

  ngOnInit(): void {
  }

}
