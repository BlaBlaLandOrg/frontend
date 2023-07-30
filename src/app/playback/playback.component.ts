import { Component, Input } from '@angular/core';
import { BackendService } from '../data-access/backend.service';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';

@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.scss'],
})
export class PlaybackComponent {
  constructor() { }

  public mouthSource = 'assets/A.png';

  public blobURL;
  @Input()
  set audioPath(audio) {
    if (audio) {
<<<<<<< HEAD
      this.backendService.getAudio2(audio).subscribe((x) => {
        console.log(x);
        this.blobURL = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(x)
        );
        console.log(this.blobURL.url);
      });
=======
      console.log(audio);
      this.playAudio(audio);
>>>>>>> ed9ed23198a0f7f20f45073e2cb90bf6ee4c71ca
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

  playAudio(audio: string, lips?: any) {
    const ele = new Audio("data:audio/mpeg;base64," + audio);
    document.getElementById('audioPlaceholder').appendChild(ele);
    ele.play();
  }

  private m = [...this.sync];
}
