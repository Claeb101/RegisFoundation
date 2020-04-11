import { RoleFilterButton } from './roleFilter';
import { TeamMember } from './teamMember';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {
  title: string;
  members: TeamMember[];
  filteredMembers: TeamMember[];
  roleFilters: RoleFilterButton[];
  defaultPNG: string;

  currentRoleFilter : string;

  constructor() {
    let des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris. Eget velit aliquet sagittis id consectetur purus. Feugiat nisl pretium fusce id velit ut tortor pretium. Rhoncus mattis rhoncus urna neque viverra.";
    let pics_dir = "assets/MemberPics/";
    this.defaultPNG = pics_dir + "JANS.jpg"

    this.title = "Meet The Team";
    this.members = [
      {image_path: this.defaultPNG, description: "A post graduate in women's studies and education. She has vast experience in teaching and working with school students. She has been recognized as an illustrious teacher through an award by Justice Shiv Raj V. Patil Foundation, Madurai, in 2019. She is also a well recognized trainer in parenting, child centered education and child rights", name: "Christy S. JohnPeter", role: "Mentor"},
      {image_path: pics_dir + "MrStephen.png", description: "Currently working as Asst. Professor and Head of the Department of Social Work in Chennai. He started his career as a young professional of CAPART, Ministry of Rural Development, Govt. of India. He has been involved in migration research since 2012.", name: "Antony Stephen", role: "Mentor"},
      {image_path: this.defaultPNG, description: des, name: "A. Nathan Alexander", role: "Mentor"},

      {image_path: this.defaultPNG, description: "A post graduate in sociology. He has more than 30 years of experience in imparting social analysis and leadership training for university students and rural youth. He motivates and involves students in the tree growing mission, and he is responsible to lead the foundation as its honorary managing trustee.", name: "John P. Amalorpavam", role: "Trustee"},
      {image_path: this.defaultPNG, description: "A post graduate in history and a trained graduate teacher with 18 years teaching experience with rural children. She is responsible to identify the deserving beneficiaries for the foundation's Educational Assistance Program.", name: "Shanthi Franklin", role: "Honorary Trustee"},
      {image_path: this.defaultPNG, description: "A post graduate in English literature and a trained graduate teacher with 21 years of teaching experience with rural children. A multi skilled Entrepreneur involved in agriculture and agro forestry. He is responsible for mobilizing donations for the foundation's Educational Assistance Program", name: "Franklin D. Amalorpavam", role: "Honorary Trustee"},

      {image_path: pics_dir + "Premi.png", description: "BDS", name: "Dr. J. Sebasti Jeya Premi", role: "Ambassador"},
      {image_path: pics_dir + "Priya.png", description: "MBBS", name: "Dr. J. Jane Priya", role: "Ambassador"},
      {image_path: pics_dir + "Sam.png", description: "MBBS", name: "Dr. S. Sam Stanley", role: "Ambassador"},
      {image_path: this.defaultPNG, description: "MBBS", name: "Dr. R. Aaron Aravindh Regis", role: "Ambassador"},
      {image_path: pics_dir + "Robin.png", description: "MBBS", name: "Dr. S. Edberg Robin", role: "Ambassador"},
      {image_path: pics_dir + "Rowina.png", description: "BDS", name: "Dr. S. Rowina Suzanne", role: "Ambassador"},
      {image_path: pics_dir + "Lotus.png", description: "MA BEd", name: "S. Lotus Nirmala", role: "Ambassador"},
      {image_path: pics_dir + "Manju.png", description: "MSc MPhil MEd", name: "J. Angel Manju", role: "Ambassador"},
      {image_path: pics_dir + "Gracy.png", description: "MA BEd", name: "S. Violet Adaikala Gracy", role: "Ambassador"},
      {image_path: pics_dir + "Joan.png", description: "MSc MBA", name: "A. JoanOfArc", role: "Ambassador"},
      {image_path: pics_dir + "Pari.png", description: "MA BSc", name: "A. James Pari Mannan", role: "Ambassador"},
      
    ];

    this.roleFilters = [
      {filter: "All", displayName:"All", id:"filter-all"},
      {filter: "Mentor", displayName:"Mentors", id:"filter-mentors"},
      {filter: "Trustee", displayName:"Trustees", id:"filter-trustees"},
      {filter: "Ambassador", displayName:"Ambassadors", id:"filter-ambassadors"},
    ]

    this.filteredMembers = this.members;

    this.currentRoleFilter = "All";
  }

  filter(){
    this.filteredMembers = [];
    for(let i = 0; i < this.members.length; i++){
      let member = this.members[i];
      if(this.currentRoleFilter == "All" || member.role.includes(this.currentRoleFilter)){
        this.filteredMembers.push(member);
      }
    }
  }

  filterRole(role : string){
    this.currentRoleFilter = role;
    this.filter();
    AOS.init();
  }

  ngOnInit(): void {
  }

}
