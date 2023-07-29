import { Component } from '@angular/core';

@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.scss'],
})
export class PlaybackComponent {
  private audioElement = new Audio('assets/sam.wav');
  public mouthSource = 'assets/A.png';

  playAudio(): void {
    this.audioElement.play();
    addEventListener('timeupdate', (event) => {});
  }

  onTimeUpdate(event: Event) {
    const audioElement = event.target as HTMLAudioElement;
    const currentTime = audioElement.currentTime;
  }
}
