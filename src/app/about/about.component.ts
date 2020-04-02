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
      {date: "...", description: "The Dr. ANS Regis Foundation was formed as a public charitable non-profit trust."},
      {date: "2017", description: "80 students studying in 10th standard at Kalaiyarkoil, Sivagangai District, Government Higher Secondary School were provided with an advanced learners dictionary."},
      {date: "2017", description: "30 children learning at the Govt. primary school in Veterneri village, sivagangai-district were given a colorful dresses."},
      {date: "2019", description: "125 students studying in 11th standard at Kavarapatti Village, Kudukottai District, Government Higher Secondary School were provided with an advanced learners dictionary."},
      {date: "2020", description: "We plan to reach out to even more children."},
    ]

    this.roots_img_path = "assets/treeEdited2.png";
  }

  ngOnInit(): void {
  }

}
