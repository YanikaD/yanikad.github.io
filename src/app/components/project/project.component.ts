import { Component, HostBinding, OnInit } from '@angular/core';
import { mock_project } from 'src/app/models/mock_data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects = mock_project;

  constructor() { }

  ngOnInit(): void {
  }

  cardFlip(i:number){
    if(this.projects[i].isFlip){
      this.projects[i].isFlip = false;
    }else{
      this.projects.forEach(function(proj){
        proj.isFlip = false;
      })

      this.projects[i].isFlip = true;
    }
  }
}
