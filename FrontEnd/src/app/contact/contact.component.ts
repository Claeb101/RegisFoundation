import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  logo: string;
  constructor() {
    this.logo = "assets/Logo/L2C1.png";
  }

  ngOnInit(): void {
  }

}
