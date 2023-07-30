import { Component } from '@angular/core';
import { BackendService, Character } from '../data-access/backend.service';
@Component({
  selector: 'app-create-companion',
  templateUrl: './create-companion.component.html',
  styleUrls: ['./create-companion.component.scss'],
})
export class CreateCompanionComponent {
  recorderInitialized = false;

  constructor(private backendService: BackendService) {}

  send(event: Blob) {
    if (this.recorderInitialized && event) {
      const formData = new FormData();
      formData.append('audio_file', event, 'randomIrgendwas');
    }
  }
}
