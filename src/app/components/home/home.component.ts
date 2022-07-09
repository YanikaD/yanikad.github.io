import { Component, OnInit } from '@angular/core';
import { my_profile } from 'src/app/models/mock_data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile = my_profile;
  constructor() { }

  ngOnInit(): void {
  }

}
