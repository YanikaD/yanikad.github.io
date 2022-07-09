import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { my_profile } from 'src/app/models/mock_data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  // div_col = document.getElementsByTagName('div');
  // bounds: any;
  about = my_profile.about_me;
  constructor() { 
  }

  ngAfterViewInit(){
    // this.div_col[14].addEventListener('mouseenter', () => {
    //   this.bounds = this.div_col[14].getBoundingClientRect();
    //   document.addEventListener('mousemove', this.rotateToMouse);
    // });

    // this.div_col[14].addEventListener('mouseleave', () => {
    //   document.removeEventListener('mousemove', this.rotateToMouse);
    //   this.div_col[14].style.transform = '';
    //   this.div_col[14].style.background = '';
    // });
  }


  // rotateToMouse(e: { clientX: any; clientY: any; }) {
  //   const div =  document.getElementsByTagName('div');
  //   const bound = div[14].getBoundingClientRect();
  //   // console.log(bound);
  //   const mouseX = e.clientX;
  //   const mouseY = e.clientY;
  //   const leftX = mouseX - bound['x'];
  //   const topY = mouseY - bound['y'];
  //   const center = {
  //     x: leftX - bound.width / 2,
  //     y: topY - bound.height / 2
  //   }
  //   const distance = Math.sqrt(center.x**2 + center.y**2);
    
    // div[14].style.transform = `
    //   scale3d(1.07, 1.07, 1.07)
    //   rotate3d(
    //     ${center.y / 100},
    //     ${-center.x / 100},
    //     0,
    //     ${Math.log(distance)* 2}deg
    //   )
    // `;
  // }

}
