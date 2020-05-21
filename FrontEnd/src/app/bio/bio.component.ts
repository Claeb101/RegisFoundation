import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  headshot: string;
  constructor() {
    this.headshot = "assets/RegisPics/Regis3.jpg"
  }

  ngOnInit(): void {
  }

}
