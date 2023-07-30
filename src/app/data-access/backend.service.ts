import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  constructor(private http: HttpClient) { }

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

  getAudio(path: String) {
    return this.http
      .get(`api/get-recording?id=${path}`, { responseType: 'blob' })
      .pipe(map((res) => res));
  }

  getAudio2(path: String) {
    return this.http
      .get(`api/get-recording2?id=${path}`, { responseType: 'blob' })
      .pipe(map((res) => res));
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

  rating(characterId: string, rating: string): Observable<any> {
    return this.http.post('api/character-update-rating/' + characterId, null, { params: { rating: rating } });
  }

  createCharacter(name: string, description: string, file: File): Observable<any> {
    return this.http.post('api/create-character/', [file], { params: { name: name, description: description } });
  }
}
