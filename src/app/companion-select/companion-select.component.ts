import { Component } from '@angular/core';

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
  styleUrls: ['./companion-select.component.scss'],
})
export class CompanionSelectComponent {
  companions: Companions[] = [
    { id: 'freeman', name: 'Morgan Freeman' },
    { id: 'test1', name: 'Hot Beach Guy' },
    { id: 'test2', name: 'Whispering Librarian' },
  ];

  settings: Setting[] = [
    { id: 'teacher', name: 'be my teacher' },
    { id: 'partner', name: 'be my partner' },
    { id: 'story', name: 'tell me a story' },
    { id: 'support', name: 'give me moral support' },
  ];
}
