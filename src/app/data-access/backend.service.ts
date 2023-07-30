import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Message } from '../models/models';

export interface Character {
  id: string;
  name: string;
  avatar_url: string;
  description: string;
  labels: string[];
  rating: number;
  voice_schema: {
    name: string;
  };
}
interface Text {
  text: string;
}

interface VoiceSchema {
  text: string;
  voice_name: string;
  model: string;
  lip_sync: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('api/list-all-character');
  }

  sendAudio(audio: FormData): Observable<Text> {
    return this.http
      .post('api/transcribe-audio', audio)
      .pipe(map((res) => res as Text));
  }

  generateText(history: Message[]): Observable<Message> {
    return this.http
      .post('api/generate-text', history)
      .pipe(map((res) => res as Message));
  }

  textToSpeech(
    text: string,
    voice: string,
    lipSync: boolean = false
  ): Observable<any> {
    const req: VoiceSchema = {
      text: text,
      voice_name: voice,
      model: 'eleven_multilingual_v1',
      lip_sync: lipSync,
    };
    return this.http.post('api/text-to-speech', req).pipe(map((res) => res));
  }
}
