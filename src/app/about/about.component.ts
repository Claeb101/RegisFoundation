import { timeEvent } from './timelineEvent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goalStatement : string;
  missionStatement : string;
  workStatement : string;

  timeline : timeEvent[];

  roots_img_path : string
  constructor() {
    this.goalStatement = "Our goal is to provide educational assistance to children from difficult backgrounds irrespective of caste, creed, or gender."
    this.missionStatement = "We believe no child should ever be deprived of education."
    this.workStatement = "We work wherever we are needed in Tamil Nadu to serve children from difficult family backgrounds."

    this.timeline = [
      {date: "2019", description: "Lorem ipsum dolor sit amet, at summo vitae quo. Postulant torquatos temporibus et vis, vim ei rebum clita. Graeci fuisset antiopam ex est, integre volumus no est, id vis scripta mediocrem. Diam quidam eleifend mel an, in cum minimum interesset."},
      {date: "2019", description: "Lorem ipsum dolor sit amet, at summo vitae quo. Postulant torquatos temporibus et vis, vim ei rebum clita. Graeci fuisset antiopam ex est, integre volumus no est, id vis scripta mediocrem. Diam quidam eleifend mel an, in cum minimum interesset."},
      {date: "2019", description: "Lorem ipsum dolor sit amet, at summo vitae quo. Postulant torquatos temporibus et vis, vim ei rebum clita. Graeci fuisset antiopam ex est, integre volumus no est, id vis scripta mediocrem. Diam quidam eleifend mel an, in cum minimum interesset."},
      {date: "2019", description: "Lorem ipsum dolor sit amet, at summo vitae quo. Postulant torquatos temporibus et vis, vim ei rebum clita. Graeci fuisset antiopam ex est, integre volumus no est, id vis scripta mediocrem. Diam quidam eleifend mel an, in cum minimum interesset."},
    ]

    this.roots_img_path = "assets/treeEdited2.png";
  }

  ngOnInit(): void {
  }

}
