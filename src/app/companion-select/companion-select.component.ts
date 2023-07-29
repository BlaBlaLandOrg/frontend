import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

interface Companions {
  name: string;
  id: string;
  avatar?: string;
}

interface Setting {
  name: string;
  id: string;
  prompt?: string;
}

@Component({
  selector: 'app-companion-select',
  templateUrl: './companion-select.component.html',
  styleUrls: [
    '../../../node_modules/keen-slider/keen-slider.min.css', './companion-select.component.scss'],
})
export class CompanionSelectComponent {
  @ViewChild("sliderRef") sliderRef?: ElementRef<HTMLElement>;
  slider?: KeenSliderInstance;

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

  ngAfterViewInit() {
    if (this.sliderRef) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        mode: "free-snap",
        slides: {
          perView: 3,
          spacing: 15,
        },
        dragSpeed: 0.7,
      })
    }
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
