import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BackendService } from '../data-access/backend.service';
@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.scss'],
})
export class PlaybackComponent {
  @Output() isLoading = new EventEmitter<boolean>();
  constructor(private backendService: BackendService) { }

  public mouthSource = 'assets/A.png';
  public blobURL;
  public closeEyes = false;
  public sync: { start: Number; end: number; value: string }[] = [];

  @Input() set text(text: string) {
    if (text) {
      this.isLoading.emit(true);
      
      this.backendService.textToSpeech(text, 'Clyde', true)
        .subscribe((res) => {
          if (res.lipsync) {
            this.sync = res.lipsync;
            this.m = [...this.sync];
          }
          if (res.bytes) {
            this.playAudio(res.bytes);
          }
        });
    }
  }

  onTimeUpdate(event: Event) {
    const audioElement = event.target as HTMLAudioElement;
    const currentTime = audioElement.currentTime;

    Math.ceil(currentTime) % 6 == 0
      ? (this.closeEyes = true)
      : (this.closeEyes = false);
    if (currentTime <= this.m[0].end) {
      this.mouthSource = 'assets/' + this.m[0].value + '.png';
    } else {
      while (currentTime > this.m[1].end && this.m.length > 1) {
        this.m = this.m.length > 0 ? this.m.slice(1) : this.m;
        this.mouthSource = 'assets/' + this.m[0].value + '.png';
      }
    }
  }

  onPlay(event: Event) {
    const audioElement = event.target as HTMLAudioElement;
    if (audioElement.currentTime == 0) {
      this.m = [...this.sync];
    }
  }

  playAudio(audio: string) {
    this.m = [...this.sync];
    const ele = new Audio('data:audio/mpeg;base64,' + audio);
    ele.addEventListener('timeupdate', (event) => this.onTimeUpdate(event));
    document.getElementById('audioPlaceholder').appendChild(ele);
    ele.play();
    this.isLoading.emit(false);
  }

  private m = [...this.sync];
}
