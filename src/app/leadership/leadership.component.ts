import { TeamMember } from './teamMember';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {
  title : string
  members : TeamMember[];
  filterMembers : TeamMember[];

  roleFilter : string;

  constructor() {
    let des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris. Eget velit aliquet sagittis id consectetur purus. Feugiat nisl pretium fusce id velit ut tortor pretium. Rhoncus mattis rhoncus urna neque viverra.";
    let img = "assets/person.jpg";
    let name = "Jovina Arulandu";
    let role = "THICC NICC"

    this.title = "Meet The Team";
    this.members = [
      {image_path: img, description: "A post graduate in women's studies and education. She has vast experience in teaching and working with school students. She has been recognized as an illustrious teacher through an award by Justice Shiv Raj V. Patil Foundation, Madurai, in 2019. She is also a well recognized trainer in parenting, child centered education and child rights", name: "Christy S. JohnPeter", role: "Mentor"},
      {image_path: img, description: "Currently working as Asst. Professor and Head of the Department of Social Work in Chennai. He started his career as a young professional of CAPART, Ministry of Rural Development, Govt. of India. He has been involved in migration research since 2012.", name: "Antony Stephen", role: "Mentor"},
      {image_path: img, description: des, name: "Nathan A. Amalorpavam", role: "Mentor"},

      {image_path: img, description: "A post graduate in sociology. He has more than 30 years of experience in imparting social analysis and leadership training for university students and rural youth. He motivates and involves students in the tree growing mission, and he is responsible to lead the foundation as its honorary managing trustee.", name: "John P. Amalorpavam", role: "Trustee"},
      {image_path: img, description: "A post graduate in history and a trained graduate teacher with 18 years teaching experience with rural children. She is responsible to identify the deserving beneficiaries for the foundation's Educational Assistance Program.", name: "Shanthi Franklin", role: "Honorary Trustee"},
      {image_path: img, description: "A post graduate in English literature and a trained graduate teacher with 21 years of teaching experience with rural children. A multi skilled Entrepreneur involved in agriculture and agro forestry. He is responsible for mobilizing donations for the foundation's Educational Assistance Program", name: "Franklin D. Amalorpavam", role: "Honorary Trustee"},
    ];

    this.filterMembers = this.members;

    this.roleFilter = "All";
  }

  filter(){
    this.filterMembers = [];
    for(let i = 0; i < this.members.length; i++){
      let member = this.members[i];
      if(this.roleFilter == "All" || member.role.includes(this.roleFilter)){
        this.filterMembers.push(member);
      }
    }
  }

  filterRole(role : string){
    this.roleFilter = role;
    this.filter();
  }

  ngOnInit(): void {
  }

}
