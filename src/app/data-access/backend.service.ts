import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { message } from '../models/models';

interface Character {
  name: 'string';
  rating: 0;
}

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('api/list-all-characters');
  }

  sendAudio(audio: FormData) {
    const headers = new HttpHeaders().set('Content-Type', 'undefined');
    return this.http.post('api/transcribe-audio', audio);
  }

  conversation(text: string) {
    console.log(text);

    const conversation: message[] = [{ role: 'system', content: 'you are morgan freeman' }];
    this.http.post('api/generate-text', conversation).subscribe(x => console.log(x))
  }
}
