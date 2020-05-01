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

  foundationTimeline : timeEvent[];
  regisTimeline : timeEvent[];

  roots_img_path : string
  constructor() {
    this.goalStatement = "Our goal is to provide educational assistance to children from difficult backgrounds irrespective of caste, creed, or gender."
    this.missionStatement = "We believe no child should ever be deprived of education."
    this.workStatement = "We work wherever we are needed in Tamil Nadu to serve children from difficult family backgrounds."

    this.regisTimeline = [
      {date: "March 12, 1961", description: "Dr. ANS. Regis was born in Thuvarlankanmoi, a village in the Sivagangai-district of Tamil Nadu. He is the fourth son of Mr. VS. Amalorpavam, school teacher, and Mrs. A. Sebastiammal, farmer and home maker."},
      {date: "...", description: "Started his primary education at Holy Cross Anglo Indian School, Tuticorin."},
      {date: "...", description: "Began high school studies at St. Mary's High School, Madurai."},
      {date: "...", description: "Started pre-university studies at St. Josephs's College, Trichy."},
      {date: "...", description: "Moved to Loyola College, Chennai, graduating in Zoology."},
      {date: "...", description: "Gained admission to study MBBS at Stanley Medical College, Chennai."},
      {date: "1987", description: "Completed his MBBS, a dream come true for his entire family as he was the first doctor from that remote area."},
      {date: "...", description: "Began working as a part-time doctor in Chennai private hospitals."},
      {date: "...", description: "Instituted his own 24 hour consultation clinic in Sidco Nagar, Villivakkam, Chennai, a predominantly working-class area. His dream was to turn it into a PEOPLE's HOSPITAL, to provide quality treatment to the common man."},
      {date: "...", description: "Dr. ANS. Regis was inspired by two illustrious doctors in terms of dedication to the medical profession while upholding human values. Dr. J Amalorpavanatha, the then Reader in Vascular Surgery, Madras Medical College, and vascular surgeon at Government General Hospital; Veteran Chest Physician and peace activist Dr. CN. Deivanayagam, Chennai."},
      {date: "...", description: "He continued to shine in his practice, reaching out to a number of patients from the working class and poor families."},
      {date: "December 18, 1992", description: "At just 31 years of age, Dr. ANS. Regis breathed his last at KMC Hospital, Chennai after a road accident."},
    ]

    this.foundationTimeline = [
      {date: "...", description: "The Dr. ANS Regis Foundation was formed as a public charitable non-profit trust."},
      {date: "2017", description: "80 students studying in 10th standard at Kalaiyarkoil, Sivagangai District, Government Higher Secondary School were provided with an advanced learners dictionary."},
      {date: "2017", description: "30 children learning at the Govt. primary school in Veterneri village, Sivagangai-district were given a colorful dresses."},
      {date: "2019", description: "125 students studying in 11th standard at Kavarapatti Village, Kudukottai District, Government Higher Secondary School were provided with an advanced learners dictionary."},
      {date: "2020", description: "We plan to reach out to even more children."},
    ]

    this.roots_img_path = "assets/treeEdited2.png";
  }

  ngOnInit(): void {
  }

}
