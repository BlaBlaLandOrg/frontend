import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { Companion, Setting } from '../models/models';
import { BackendService, Character } from '../data-access/backend.service';
import { Router } from '@angular/router';
import { ConversationService } from '../data-access/conversation.service';

@Component({
  selector: 'app-companion-select',
  templateUrl: './companion-select.component.html',
  styleUrls: [
    '../../../node_modules/keen-slider/keen-slider.min.css',
    './companion-select.component.scss',
  ],
})
export class CompanionSelectComponent {
  @ViewChild('sliderRef') sliderRef?: ElementRef<HTMLElement>;
  slider?: KeenSliderInstance;
  slideIdx = 0;
  showSettings = false;
  showSubmit = false;
  companions: Character[] = [];

  // companions: Companion[] = [
  //   { id: 'freeman', name: 'Morgan Freeman', avatar: 'freeman.png' },
  //   { id: 'beach', name: 'Hot Beach Guy', avatar: 'beach.png' },
  //   { id: 'librarian', name: 'Whispering Librarian', avatar: 'librarian.png' },
  //   { id: 'grandma', name: 'My Grandma', avatar: 'grandma.png' },
  //   { id: 'football', name: 'Football Coach', avatar: 'football.png' },
  // ];

  settings: Setting[] = [
    { id: 'teacher', name: 'be my teacher' },
    { id: 'partner', name: 'be my partner' },
    { id: 'story', name: 'tell me a story' },
    { id: 'support', name: 'give me moral support' },
  ];

  constructor(private backend: BackendService, private router: Router, private conversationService: ConversationService) { }

  ngAfterViewInit() {
    this.backend.getAllCharacters().subscribe(characters => { this.companions = characters; this.initSlider() });
  }

  initSlider() {
    console.log(this.companions);

    if (this.sliderRef) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        mode: 'free-snap',
        slides: {
          perView: 3,
          spacing: 15,
          origin: 'center',
        },
        dragSpeed: 0.7,
        slideChanged: (slider) => this.updateSlide(slider),
      });

      setTimeout(() => {
        //requires re-render after init
        this.slider?.update();
      }, 0)
    }
  }

  updateSlide(slider: KeenSliderInstance) {
    const index = slider.track.details.rel;
    slider.slides.forEach((element) => element.classList.remove('active'));
    slider.slides[index].classList.add('active');
    this.slideIdx = index;
    this.showSettings = true;
  }

  next() {
    this.slider?.next();
  }

  prev() {
    this.slider?.prev();
  }

  moveToIdx(index: number) {
    this.slider?.moveToIdx(index);
    this.slider?.emit('slideChanged');
  }

  navigateToCompanion() {
    this.conversationService.currentCompanion = this.companions[this.slideIdx];
    this.router.navigateByUrl('/companion');
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
