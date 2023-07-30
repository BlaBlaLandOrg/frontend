import { Component, Input } from '@angular/core';
import { BackendService } from '../data-access/backend.service';

@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.scss'],
})
export class PlaybackComponent {
  constructor(private backendService: BackendService) {}

  public mouthSource = 'assets/A.png';

  public _audioPath;
  @Input()
  set audioPath(audio) {
    if (audio) {
      this.backendService.getAudio(audio).subscribe((x) => {
        console.log(x);
        this._audioPath = x;
      });
    }
  }
  @Input() public sync: { start: Number; end: number; value: string }[] = [];
  public closeEyes = false;

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

  private m = [...this.sync];
}
