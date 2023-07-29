import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

interface Character {
  name: 'string';
  rating: 0;
}

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('api/list-all-characters');
  }

  sendAudio(audio: FormData) {
    const headers = new HttpHeaders().set('Content-Type', 'undefined');
    return this.http.post('api/transcribe-audio', audio);
  }
}
