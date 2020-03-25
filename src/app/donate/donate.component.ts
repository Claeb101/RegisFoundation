import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  title : string;
  constructor() {
    this.title = "Donate"
  }

  ngOnInit(): void {
  }

}
