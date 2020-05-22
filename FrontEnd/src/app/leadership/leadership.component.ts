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
    this.defaultPNG = pics_dir + "person.jpg"

    this.title = "Hi There!";
    this.members = [
      {isRevealed: false, image_path: pics_dir + "Christy.jpg", description: "A post graduate in women's studies and education. She has vast experience in teaching and working with school students. She has been recognized as an illustrious teacher through an award by Justice Shiv Raj V. Patil Foundation, Madurai, in 2019. She is also a well recognized trainer in parenting, child centered education and child rights.", name: "Christy S. JohnPeter", role: "Mentor"},
      {isRevealed: false, image_path: pics_dir + "MrStephen.png", description: "Currently working as Asst. Professor and Head of the Department of Social Work in Chennai. He started his career as a young professional of CAPART, Ministry of Rural Development, Govt. of India. He has been involved in migration research since 2012.", name: "Antony Stephen", role: "Mentor"},
      {isRevealed: false, image_path: pics_dir + "Alex.jpg", description: des, name: "A. Nathan Alexander", role: "Mentor"},

      {isRevealed: false, image_path: pics_dir + "John.jpg", description: "A post graduate in sociology. He has more than 30 years of experience in imparting social analysis and leadership training for university students and rural youth. He motivates and involves students in the tree growing mission, and he is responsible to lead the foundation as its honorary managing trustee.", name: "John P. Amalorpavam", role: "Trustee"},
      {isRevealed: false, image_path: pics_dir + "Desai.jpg", description: "A post graduate in English literature and a trained graduate teacher with 21 years of teaching experience with rural children. A multi skilled Entrepreneur involved in agriculture and agro forestry. He is responsible for mobilizing donations for the foundation's Educational Assistance Program", name: "Franklin D. Amalorpavam", role: "Honorary Trustee"},
      {isRevealed: false, image_path: pics_dir + "Shanthi.jpg", description: "A post graduate in history and a trained graduate teacher with 18 years teaching experience with rural children. She is responsible to identify the deserving beneficiaries for the foundation's Educational Assistance Program.", name: "Shanthi Franklin", role: "Honorary Trustee"},
      
      // {image_path: pics_dir + "Regis.jpg", description: "The inspiration for this foundation.", name: "Dr. R. Aaron Aravindh Regis, MBBS", role: "Ambassador"},
      {isRevealed: false, image_path: pics_dir + "Lotus2.jpg", description: "Lotus Nirmala is a history teacher. Being born after Dr. Regis, they both grew very close. Her sadness knew no bounds when Dr. Regis passed away. As a ministry for God, she began to teach many of the unsaved women of the society. She is a person who believes that the fear of God can make a huge difference in everyone’s lives. She strives to see her family and others blessed and ministered to through God. She is currently working in Chennai.", name: "S. Lotus Nirmala, MA; BEd", role: "Ambassador"},
      {isRevealed: false, image_path: pics_dir + "Pari.jpg", description: "The first younger brother of Dr. Regis, currently running his own food products dirstribution buisness in Trichy.", name: "A. James Pari Mannan, BSc; MA", role: "Ambassador"},
      {isRevealed: false, image_path: pics_dir + "Manju2.jpg", description: "Mrs. Angel Manju, younger sister of Dr. Regis, is a renowned PG teacher in chemistry whose dedication and mastery has been appreciated by her students, their parents, and her colleagues. She blends humanitarian values while teaching the science of substance and its properties for the past 27 years. She is dedicated to all her roles as a teacher, mother, wife, sister, and friend. She is currently working in Trichy.", name: "J. Angel Manju, MSc; MPhil; MEd", role: "Ambassador"},
      {isRevealed: false, image_path: pics_dir + "Gracy.jpg", description: "Gracy is the first social worker in the family. She is a determined, honest, and sincere person who has always wanted to help people. Dr. Regis has never failed to inspire and influence a numerous amount of lives including Gracy's. She is currently working at Trends Tower a garment production unit in Coimbatore.", name: "S. Violet Adaikala Gracy, MA; BEd", role: "Ambassador"},
      {isRevealed: false, image_path: pics_dir + "Joan.png", description: "Joanofarc, sister of Dr. Regis, is an IT software professional. She has a strong passion for helping others and believes that IT can have a powerful impact in modern society. Because of Dr. Regis’ dedication, hardworking nature, service, and humility, she strives to make the most out of every single opportunity thrown her way. She is currently working in U.S.A.", name: "A. JoanOfArc, MSc; MBA", role: "Ambassador"},
      {isRevealed: false, image_path: pics_dir + "Premi.jpg", description: "Dr. Sebasti Jeya Premi, niece of Dr. Regis, was the first dentist of the family. The way her uncle, Dr. Regis, used to treat his patients inspired her to pursue medicine. He used to say that whatever a person learns in the medical field doesn’t matter but the way they treat the patient is more important. She is working towards becoming a renowned dentist and also specialized in cosmetic dentistry. She is currently working in Singapore. ", name: "Dr. J. Sebasti Jeya Premi, BDS", role: "Ambassador"},
      {isRevealed: false, image_path: pics_dir + "Priya.jpg", description: "Dr. Jane Priya, niece of Dr. Regis, was the first doctor to follow the path of her uncle, Dr. Regis. She has a keen interest in surgery and is training towards obtaining a wide array of surgical skills. She is determined to be able to perform a range of surgical procedures for the needy. She is currently working in Chennai.", name: "Dr. J. Jane Priya, MBBS", role: "Ambassador"},
      {isRevealed: false, image_path: pics_dir + "Sam.jpg", description: "Dr. Sam Stanley, nephew of Dr. Regis, was the first doctor to work in Maldives from the family. He has been interested in medicine since his childhood. His dream of becoming a doctor sprouted growing up with Dr. Regis. Fascinated by Dr. Regis’ service, clinic, and dedication, Dr. Sam was driven to follow in the footsteps of his uncle. Dr. Sam is known for his cheerful approach towards his patients and for being congenial with prudent management skills. He is currently working in Bangalore.", name: "Dr. S. Sam Stanley, MBBS", role: "Ambassador"},
      {isRevealed: false, image_path: pics_dir + "Aaron.jpg", description: "Dr. Aaron Aravind Regis, nephew of Dr. Regis, was the first doctor of the family to get into the government medical service. In the future, he aspires to specialize in orthopaedic surgery. Named after Dr. Regis, he envisages a service oriented approach to the poor and needy. Currently, he is in charge of the Primary Health Center", name: "Aaron Aravind Regis", role: "Ambassador"},
      {isRevealed: false, image_path: pics_dir + "Robin.jpg", description: "Dr. Robin, nephew of Dr. Regis, was the first doctor in the family who studied medicine in the West Indies and the U.S.A. The human brain never failed to impress him since his childhood. With that same curiosity and interest, he started his journey to become a doctor. Stories of his uncle, Dr. Regis, motivated him to help others and put others’ need before his own. His hopes are that he will be able to research all about neurons and treat brain disorders.", name: "Dr. S. Edberg Robin, MBBS", role: "Ambassador"},
      {isRevealed: false, image_path: pics_dir + "Rowina.jpg", description: "Dr. Rowina Suzanne, niece of Dr. Regis, was the second dentist of the family. She is calm and has good organizational skills which led her one step closer to her career and dream. She is keen to become an orthodontist and is working towards that being reality. She is currently studying in Salem.", name: "Dr. S. Rowina Suzanne, BDS", role: "Ambassador"},
      //{image_path: pics_dir + "Jovina.jpg", description: "Yall who needs a bio when u got an insta @jovinadebbie", name: "Jovina Debbie Arulandu", role: "Big Boss"},
      
    ];

    this.roleFilters = [
      {filter: "All", displayName:"All", id:"filter-all"},
      {filter: "Mentor", displayName:"Mentors", id:"filter-mentors"},
      {filter: "Trustee", displayName:"Trustees", id:"filter-trustees"},
      {filter: "Ambassador", displayName:"Ambassadors", id:"filter-ambassadors"},
      //{filter: "Big Boss", displayName:"Bosses", id:"filter-boss"}
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

      member.isRevealed = false;
    }
  }

  filterRole(role : string){
    this.currentRoleFilter = role;
    this.filter();
    AOS.init();
  }

  toggleDes(i : number){
    this.filteredMembers[i].isRevealed = !this.filteredMembers[i].isRevealed;
  }

  ngOnInit(): void {
  }

}
