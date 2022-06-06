import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent implements OnInit {
  javaScript = true;
  angular = true;
  changeText = false;
  projectBackgrounds = ['/assets/img/projects/elpolloloco-pc.png', '/assets/img/projects/Join-pc.jpg', '/assets/img/projects/quizapp-pc.png', '/assets/img/projects/beerando-pc.png', '/assets/img/projects/pokedex-pc.png', '/assets/img/projects/portfolio-pc.png']

  constructor() {
  }

  ngOnInit(): void {
    AOS.init();
    this.projectBackgrounds;

  }

}
