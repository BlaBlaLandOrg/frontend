import { Component } from '@angular/core';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.scss'],
})
export class CompanionComponent {
  saveAsMp3(event: any) {
    console.log(event);
  }
}
