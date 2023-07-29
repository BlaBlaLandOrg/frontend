import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Message } from '../models/models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  history: Message[] = [];

  constructor(private backend: BackendService) { }

  initConversation() {
    this.history = [{ role: 'system', content: 'you are a character program pretending to be Morgan Freeman' }];
  }

  chat(newMessage: string): Observable<string> {
    this.history.push({ role: 'user', content: newMessage });
    return this.backend.generateText(this.history).pipe(map(res => {
      this.history.push(res);
      return res.content
    }));
  }
}
