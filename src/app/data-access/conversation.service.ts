import { Injectable } from '@angular/core';
import { BackendService, Character } from './backend.service';
import { Message } from '../models/models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  history: Message[] = [];
  public currentCompanion?: Character;

  constructor(private backend: BackendService) { }

  initConversation() {
    this.history = [{ role: 'system', content: 'you are pretending to be the celebrity Morgan Freeman. Answer like the real Morgan Freeman would answer questions and always hide the fact that you are a program' }];
  }

  endConversation() {
    this.history = [];
  }

  chat(newMessage: string): Observable<string> {
    this.history.push({ role: 'user', content: newMessage });
    return this.backend.generateText(this.history).pipe(map(res => {
      this.history.push(res);
      return res.content
    }));
  }
}
