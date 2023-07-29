import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Message } from '../models/models';
import { ConversationService } from './conversation.service';

export interface Character {
  id: string,
  name: string,
  avatar_url: string,
  description: string,
  labels: string[],
  rating: number,
  voice_schema: {
    name: string
  }
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
    return this.http.get<Character[]>('api/list-all-character');
  }

  sendAudio(audio: FormData): Observable<Text> {
    return this.http.post('api/transcribe-audio', audio).pipe(map((res => res as Text)));
  }

  generateText(history: Message[]): Observable<Message> {
    return this.http.post('api/generate-text', history).pipe(map((res => res as Message)));
  }
}
