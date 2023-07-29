import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { Companions, Setting } from '../models/models';
import { BackendService } from '../data-access/backend.service';

@Component({
  selector: 'app-companion-select',
  templateUrl: './companion-select.component.html',
  styleUrls: [
    '../../../node_modules/keen-slider/keen-slider.min.css', './companion-select.component.scss'],
})
export class CompanionSelectComponent {
  @ViewChild("sliderRef") sliderRef?: ElementRef<HTMLElement>;
  slider?: KeenSliderInstance;
  slideIdx = 0;
  showSettings = false;
  showSubmit = false;

  companions: Companions[] = [
    { id: 'freeman', name: 'Morgan Freeman', avatar: 'freeman.png' },
    { id: 'beach', name: 'Hot Beach Guy', avatar: 'beach.png' },
    { id: 'librarian', name: 'Whispering Librarian', avatar: 'librarian.png' },
    { id: 'grandma', name: 'My Grandma', avatar: 'grandma.png' },
    { id: 'football', name: 'Football Coach', avatar: 'football.png' },
  ];

  iterator = Array(20).fill(1)

  settings: Setting[] = [
    { id: 'teacher', name: 'be my teacher' },
    { id: 'partner', name: 'be my partner' },
    { id: 'story', name: 'tell me a story' },
    { id: 'support', name: 'give me moral support' },
  ];

  constructor(private backend: BackendService) {}

  ngAfterViewInit() {
    if (this.sliderRef) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        mode: "free-snap",
        slides: {
          perView: 3,
          spacing: 15,
          origin: 'center'
        },
        dragSpeed: 0.7,
        slideChanged: (slider) => this.updateSlide(slider)
      })
    }
    this.backend.getAllCharacters();
  }

  updateSlide(slider: KeenSliderInstance) {
    const index = slider.track.details.rel;
    slider.slides.forEach(element => element.classList.remove('active'));
    slider.slides[index].classList.add('active');
    this.showSettings = true;
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
