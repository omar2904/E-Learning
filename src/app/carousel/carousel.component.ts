import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  slides = [
    { src: "assets/a.png" },
  ];
  slide = 'assets/a.png'
  
  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onPreviousClick() {
    this.slide = 'assets/'
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    this.slide += this.currentSlide + '.JPG';
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    this.slide = 'assets/'
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    this.slide += this.currentSlide + '.JPG';
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
