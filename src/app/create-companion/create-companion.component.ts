import { Component } from '@angular/core';
import { BackendService, Character } from '../data-access/backend.service';
@Component({
  selector: 'app-create-companion',
  templateUrl: './create-companion.component.html',
  styleUrls: ['./create-companion.component.scss'],
})
export class CreateCompanionComponent {
  fileName: string;
  file: File;
  charName: string;
  charDescription: string;


  constructor(private backendService: BackendService) { }

  // send(event: Blob) {
  //   if (this.recorderInitialized && event) {
  //     const formData = new FormData();
  //     formData.append('audio_file', event, 'randomIrgendwas');
  //   }
  // }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.file = file;
  }

  submit() {
    if (this.charName && this.charDescription && this.file) {
      this.backendService.createCharacter(this.charName, this.charDescription, this.file).subscribe(x => console.log(x));
    }
  }
}
