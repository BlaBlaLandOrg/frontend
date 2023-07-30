import { Component } from '@angular/core';
import { BackendService, Character } from '../data-access/backend.service';
import { ConversationService } from '../data-access/conversation.service';

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
      name: 'test',
    },
  };

  lipsync = [];

  constructor(
    private backendService: BackendService,
    private conversationService: ConversationService
  ) {}

  ngOnInit() {
    this.conversationService.initConversation();
    if (this.conversationService.currentCompanion)
      this.companion = this.conversationService.currentCompanion;
  }

  send(event: Blob) {
    if (this.recorderInitialized && event) {
      const formData = new FormData();
      formData.append('audio_file', event, 'randomIrgendwas');

      this.backendService.sendAudio(formData).subscribe((res) => {
        this.userText = res.text;
        this.conversationService.chat(res.text).subscribe((res) => {
          this.companionText = res;
          this.backendService
            .textToSpeech(res, 'Clyde', true)
            .subscribe((res) => {
              this.playAudio(res.path);
              this.audio = res.path;
              if (res.lipsync) {
                this.lipsync = res.lipsync;
              }
            });
        });
      });
    }
  }

  playAudio(audio: File, lips?: any) {
    console.log(audio);
  }
}
