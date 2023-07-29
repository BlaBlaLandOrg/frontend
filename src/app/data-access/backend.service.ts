import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Message } from '../models/models';
import { ConversationService } from './conversation.service';

interface Character {
  name: 'string';
  rating: 0;
}
interface Text {
  text: 'string';
}

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('api/list-all-characters');
  }

  sendAudio(audio: FormData): Observable<Text> {
    return this.http.post('api/transcribe-audio', audio).pipe(map((res => res as Text)));
  }

  generateText(history: Message[]): Observable<Message> {
    return this.http.post('api/generate-text', history).pipe(map((res => res as Message)));
  }
}
