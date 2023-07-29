import { Component } from '@angular/core';
import { BackendService } from '../data-access/backend.service';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.scss'],
})
export class CompanionComponent {
  private audio: Blob | null = null;

  constructor(private backendService: BackendService) {}

  save(event: Blob) {
    console.log(event);
    this.audio = event;
  }
  send() {
    if (this.audio) {
      const formData = new FormData();
      formData.append('audio_file', this.audio);

      this.backendService.sendAudio(formData).subscribe((x) => console.log(x));
    }
  }
}
