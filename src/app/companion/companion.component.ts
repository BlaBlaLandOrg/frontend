import { Component, ElementRef, ViewChild } from '@angular/core';
import { BackendService, Character } from '../data-access/backend.service';
import { ConversationService } from '../data-access/conversation.service';
import { NgxMicRecorderComponent } from 'ngx-mic-recorder';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.scss'],
})
export class CompanionComponent {
  audio?: Blob;
  recorderInitialized = false;
  companionText = '...';
  userText = '...';
  companion: Character = {
    id: 'test',
    name: 'characterName',
    avatar_url: 'avatar',
    description: 'description',
    labels: [],
    rating: 3,
    voice_schema: {
      name: 'test'
    }
  };

  constructor(private backendService: BackendService, private conversationService: ConversationService) { }

  ngOnInit() {
    this.conversationService.initConversation();
    if (this.conversationService.currentCompanion) this.companion = this.conversationService.currentCompanion;
  }

  send(event: Blob) {
    if (this.recorderInitialized && event) {
      const formData = new FormData();
      formData.append('audio_file', event, 'randomIrgendwas');

      this.backendService.sendAudio(formData).subscribe(res => {
        this.userText = res.text;
        this.conversationService.chat(res.text).subscribe(res => {
          this.companionText = res
        });
      });
    }
  }
}
