import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-client';
  sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200
  });
  constructor(){

  }

  ngOnInit(): void {
    this.sr.reveal('.home__data, .about__img, ',{}); 
    this.sr.reveal('.home__img, .about__subtitle, .about__text',{delay: 200}); 
    this.sr.reveal('.home__social-icon, .contact__input',{ interval: 200}); 
  }

 
}
