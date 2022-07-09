import { Component, OnInit } from '@angular/core';
import { mock_skills } from 'src/app/models/mock_data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = mock_skills
  constructor() { }

  ngOnInit(): void {
  }

}

