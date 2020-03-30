import { TeamMember } from './teamMember';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {
  title : string
  trustees : TeamMember[];
  mentors : TeamMember[];

  constructor() {
    let des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris. Eget velit aliquet sagittis id consectetur purus. Feugiat nisl pretium fusce id velit ut tortor pretium. Rhoncus mattis rhoncus urna neque viverra.";
    let img = "assets/person.jpg";
    this.title = "Hello There";
    this.trustees = [
      {image_path: img, description: des},
      {image_path: img, description: des},
      {image_path: img, description: des},
    ];

    this.mentors = [
      {image_path: img, description: des},
      {image_path: img, description: des},
      {image_path: img, description: des},
    ];
  }

  ngOnInit(): void {
  }

}
