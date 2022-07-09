import { Component, OnInit } from '@angular/core';
import { reveal } from 'scrollreveal';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navLink = document.querySelectorAll('.nav__link');
  sections = document.querySelectorAll('section[id]'); 
  navMenu: any;
  sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200
  });

  constructor() { }

  ngOnInit(): void {
    this.showMenu('nav-toggle','nav-menu');
    this.navLink.forEach(n => n.addEventListener('click', this.linkAction))
    window.addEventListener('scroll', this.scrollActive);
    this.sr.reveal('.home__data, .about__img, ',{}); 
    this.sr.reveal('.home__img, .about__subtitle, .about__text, .skills__group',{delay: 400}); 
    this.sr.reveal('.home__social-icon',{ interval: 200}); 
    this.sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
  }

  showMenu(toggleId: string, navId: string){
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
  }

  linkAction(){
    const navMenu = document.getElementById('nav-menu');
    this.navMenu.classList.remove('show');
  }

  scrollActive(){
    const scrollY = window.pageYOffset
    const sections : NodeListOf<Element> = document.querySelectorAll('section[id]');
    const active_sec = null;
    for (const section of sections as any){
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            const active_sec=document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            active_sec!.classList.add('active')
        }else{
            const another_sec=document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            another_sec!.classList.remove('active')
        }
    }
  }

}