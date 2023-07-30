import { Component } from '@angular/core';
import { BackendService, Character } from '../data-access/backend.service';
import { ConversationService } from '../data-access/conversation.service';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.scss'],
})
export class CompanionComponent {
  isLoading = false;
  recorderInitialized = false;
  companionText;
  userText = '...';
  companion: Character = {
    id: '1',
    name: 'characterName',
    avatar_url: 'avatar',
    description: 'description',
    labels: [],
    rating: 3,
    voice_schema: {
      name: 'Clyde',
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
        });
      });
    }
  }

  rate(rating: string) {
    console.log(rating);
    this.backendService.rating(this.companion.id, rating).subscribe(res => this.companion.rating = res.new_rating);
  }
}
