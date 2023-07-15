import { timeEvent } from './timelineEvent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goalStatement: string;
  missionStatement: string;
  workStatement: string;

  foundationTimeline: timeEvent[];
  regisTimeline: timeEvent[];

  roots_img_path: string
  constructor() {
    this.goalStatement = "Our goal is to provide educational assistance to children from difficult backgrounds irrespective of caste, creed, or gender."
    this.missionStatement = "We believe no child should ever be deprived of education."
    this.workStatement = "We work wherever we are needed in Tamil Nadu to serve children from difficult family backgrounds."

    this.regisTimeline = [
      { date: "March 12, 1961", img_path: '', description: "Dr. A.N.S. Regis was born in Thuvarlankanmoi, a village in the Sivagangai-district of Tamil Nadu. He is the fourth son of Mr. VS. Amalorpavam, school teacher, and Mrs. A. Sebastiammal, farmer and home maker." },
      { date: "...", img_path: '', description: "Started his primary education at Holy Cross Anglo Indian School, Tuticorin." },
      { date: "...", img_path: '', description: "Began high school studies at St. Mary's High School, Madurai." },
      { date: "...", img_path: '', description: "Started pre-university studies at St. Josephs's College, Trichy." },
      { date: "...", img_path: '', description: "Moved to Loyola College, Chennai, graduating in Zoology." },
      { date: "...", img_path: '', description: "Gained admission to study MBBS at Stanley Medical College, Chennai." },
      { date: "1987", img_path: '', description: "Completed his MBBS, a dream come true for his entire family as he was the first doctor from that remote area." },
      { date: "...", img_path: '', description: "Began working as a part-time doctor in Chennai private hospitals." },
      { date: "...", img_path: '', description: "Instituted his own 24 hour consultation clinic in Sidco Nagar, Villivakkam, Chennai, a predominantly working-class area. His dream was to turn it into a PEOPLE's HOSPITAL, to provide quality treatment to the common man." },
      { date: "...", img_path: '', description: "Dr. A.N.S. Regis was inspired by two illustrious doctors in terms of dedication to the medical profession while upholding human values. Dr. J Amalorpavanatha, the then Reader in Vascular Surgery, Madras Medical College, and vascular surgeon at Government General Hospital; Veteran Chest Physician and peace activist Dr. CN. Deivanayagam, Chennai." },
      { date: "...", img_path: '', description: "He continued to shine in his practice, reaching out to a number of patients from the working class and poor families." },
      { date: "December 18, 1992", img_path: '', description: "At just 31 years of age, Dr. A.N.S. Regis breathed his last at KMC Hospital, Chennai after a road accident." },
    ]

    this.foundationTimeline = [
      { date: "...", img_path: '', description: "The Dr. A.N.S. Regis Foundation was formed as a public charitable non-profit trust." },
      { date: "2017", img_path: '', description: "80 students studying in 10th standard at Kalaiyarkoil, Sivagangai District, Government Higher Secondary School were provided with an advanced learners dictionary." },
      { date: "2017", img_path: '', description: "30 children learning at the Govt. primary school in Veterneri village, Sivagangai-district were given a colorful dresses." },
      { date: "2019", img_path: '', description: "125 students studying in 11th standard at Kavarapatti Village, Pudukkottai District, Government Higher Secondary School were provided with an advanced learners dictionary." },
      { date: "November 3, 2020", img_path: 'assets/Timeline/Nov_2020.jpg', description: "Our humble solidarity to four school going children whose parents are sanitation workers. Thanks to my friend Mr. Mansingh and Dr. Ravi who identified them for this Assistance. They were provided with a colour dress as they wished." },
      { date: "February 5, 2023", img_path: "assets/Timeline/20230205.jpg", description: "Renovation work at Regis clinic in progress." },
      { date: "February 12, 2023", img_path: "", description: "The top Scorers in 10th and 12 th std, Subathradevi, Varunkumar, Harini, Elango, and Sarani were  given  a cash award of Rs.1000 and an AL Dictionary  during  the CREA School  Annual day  on 28.01.23." },
      { date: "May 13, 2023", img_path: "assets/Timeline/20230513.jpg", description: "Renovation work  at Dr.Regis clinic  at it's  final phase. Kindly  Bless  this effort." },
    ]


    this.roots_img_path = "assets/treeEdited2.png";
  }

  ngOnInit(): void {
  }

}
