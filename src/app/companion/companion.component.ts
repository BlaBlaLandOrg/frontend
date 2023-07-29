import { Component } from '@angular/core';
import { BackendService } from '../data-access/backend.service';
import { ConversationService } from '../data-access/conversation.service';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.scss'],
})
export class CompanionComponent {
  audio: Blob | null = null;
  companionText = '...';
  userText = '...';

  constructor(private backendService: BackendService, private conversationService: ConversationService) { }

  ngOnInit() {
    this.conversationService.initConversation();
  }

  save(event: Blob) {
    this.audio = event;
    this.send();
  }

  send() {
    if (this.audio) {
      const formData = new FormData();
      formData.append('audio_file', this.audio, 'randomIrgendwas');

      this.backendService.sendAudio(formData).subscribe(res => {
        this.userText = res.text;
        this.conversationService.chat(res.text).subscribe(res => {
          this.companionText = res
        });
      });
    }
  }
}
