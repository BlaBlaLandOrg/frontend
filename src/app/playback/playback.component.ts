import { Component } from '@angular/core';

@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.scss'],
})
export class PlaybackComponent {
  public mouthSource = 'assets/A.png';
  public audioElement = null;

  onTimeUpdate(event: Event) {
    const audioElement = event.target as HTMLAudioElement;
    const currentTime = audioElement.currentTime;

    if (currentTime <= this.m[0].end) {
      this.mouthSource = 'assets/' + this.m[0].value + '.png';
    } else {
      while (currentTime > this.m[0].end && this.m.length > 1) {
        this.m = this.m.length > 0 ? this.m.slice(1) : this.m;
        this.mouthSource = 'assets/' + this.m[1].value + '.png';
      }
    }
  }

  onPlay(event: Event) {
    const audioElement = event.target as HTMLAudioElement;
    if (audioElement.currentTime == 0) {
      this.m = [...this.sync];
    }
  }

  private sync = [
    { start: 0.0, end: 0.05, value: 'X' },
    { start: 0.05, end: 0.24, value: 'B' },
    { start: 0.24, end: 0.45, value: 'F' },
    { start: 0.45, end: 0.59, value: 'B' },
    { start: 0.59, end: 0.67, value: 'A' },
    { start: 0.67, end: 0.82, value: 'H' },
    { start: 0.82, end: 0.9, value: 'A' },
    { start: 0.9, end: 1.09, value: 'H' },
    { start: 1.09, end: 1.23, value: 'C' },
    { start: 1.23, end: 1.46, value: 'B' },
    { start: 1.46, end: 1.65, value: 'C' },
    { start: 1.65, end: 1.86, value: 'B' },
    { start: 1.86, end: 1.92, value: 'A' },
    { start: 1.92, end: 1.98, value: 'B' },
    { start: 1.98, end: 2.06, value: 'A' },
    { start: 2.06, end: 2.15, value: 'E' },
    { start: 2.15, end: 2.22, value: 'B' },
    { start: 2.22, end: 2.5, value: 'C' },
    { start: 2.5, end: 2.57, value: 'B' },
    { start: 2.57, end: 2.71, value: 'C' },
    { start: 2.71, end: 3.16, value: 'A' },
    { start: 3.16, end: 3.32, value: 'B' },
    { start: 3.32, end: 3.53, value: 'F' },
    { start: 3.53, end: 3.67, value: 'C' },
    { start: 3.67, end: 3.74, value: 'F' },
    { start: 3.74, end: 3.81, value: 'E' },
    { start: 3.81, end: 3.95, value: 'C' },
    { start: 3.95, end: 4.02, value: 'E' },
    { start: 4.02, end: 4.23, value: 'F' },
    { start: 4.23, end: 4.58, value: 'B' },
    { start: 4.58, end: 4.66, value: 'A' },
    { start: 4.66, end: 4.71, value: 'C' },
    { start: 4.71, end: 4.82, value: 'B' },
    { start: 4.82, end: 4.9, value: 'A' },
    { start: 4.9, end: 5.0, value: 'E' },
    { start: 5.0, end: 5.07, value: 'B' },
    { start: 5.07, end: 5.28, value: 'C' },
    { start: 5.28, end: 5.49, value: 'B' },
    { start: 5.49, end: 5.63, value: 'C' },
    { start: 5.63, end: 5.7, value: 'E' },
    { start: 5.7, end: 5.77, value: 'C' },
    { start: 5.77, end: 5.91, value: 'B' },
    { start: 5.91, end: 6.12, value: 'C' },
    { start: 6.12, end: 6.54, value: 'B' },
    { start: 6.54, end: 6.75, value: 'H' },
    { start: 6.75, end: 6.82, value: 'C' },
    { start: 6.82, end: 6.89, value: 'B' },
    { start: 6.89, end: 6.96, value: 'G' },
    { start: 6.96, end: 7.03, value: 'E' },
    { start: 7.03, end: 7.17, value: 'B' },
    { start: 7.17, end: 7.31, value: 'C' },
    { start: 7.31, end: 7.38, value: 'B' },
    { start: 7.38, end: 7.45, value: 'C' },
    { start: 7.45, end: 7.59, value: 'B' },
    { start: 7.59, end: 7.73, value: 'C' },
    { start: 7.73, end: 7.91, value: 'B' },
    { start: 7.91, end: 7.95, value: 'G' },
    { start: 7.95, end: 7.99, value: 'B' },
    { start: 7.99, end: 8.07, value: 'A' },
    { start: 8.07, end: 8.46, value: 'F' },
    { start: 8.46, end: 8.6, value: 'E' },
    { start: 8.6, end: 8.74, value: 'B' },
    { start: 8.74, end: 8.88, value: 'C' },
    { start: 8.88, end: 9.02, value: 'B' },
    { start: 9.02, end: 9.09, value: 'C' },
    { start: 9.09, end: 9.3, value: 'B' },
    { start: 9.3, end: 9.37, value: 'G' },
    { start: 9.37, end: 9.44, value: 'E' },
    { start: 9.44, end: 9.52, value: 'A' },
    { start: 9.52, end: 9.82, value: 'B' },
    { start: 9.82, end: 9.96, value: 'C' },
    { start: 9.96, end: 10.1, value: 'B' },
    { start: 10.1, end: 10.24, value: 'C' },
    { start: 10.24, end: 10.46, value: 'B' },
    { start: 10.46, end: 10.61, value: 'A' },
    { start: 10.61, end: 10.65, value: 'H' },
    { start: 10.65, end: 10.73, value: 'A' },
    { start: 10.73, end: 10.94, value: 'H' },
    { start: 10.94, end: 11.01, value: 'C' },
    { start: 11.01, end: 11.08, value: 'B' },
    { start: 11.08, end: 11.22, value: 'C' },
    { start: 11.22, end: 11.36, value: 'B' },
    { start: 11.36, end: 11.64, value: 'E' },
    { start: 11.64, end: 11.82, value: 'C' },
    { start: 11.82, end: 11.97, value: 'B' },
    { start: 11.97, end: 12.04, value: 'C' },
    { start: 12.04, end: 12.11, value: 'E' },
    { start: 12.11, end: 12.18, value: 'C' },
    { start: 12.18, end: 12.25, value: 'E' },
    { start: 12.25, end: 12.53, value: 'C' },
    { start: 12.53, end: 12.6, value: 'E' },
    { start: 12.6, end: 12.67, value: 'G' },
    { start: 12.67, end: 13.09, value: 'C' },
    { start: 13.09, end: 13.16, value: 'G' },
    { start: 13.16, end: 13.23, value: 'E' },
    { start: 13.23, end: 13.37, value: 'C' },
    { start: 13.37, end: 13.44, value: 'B' },
    { start: 13.44, end: 13.52, value: 'A' },
    { start: 13.52, end: 13.57, value: 'B' },
    { start: 13.57, end: 13.75, value: 'H' },
    { start: 13.75, end: 13.96, value: 'B' },
    { start: 13.96, end: 14.03, value: 'E' },
    { start: 14.03, end: 14.17, value: 'B' },
    { start: 14.17, end: 14.24, value: 'E' },
    { start: 14.24, end: 14.45, value: 'B' },
    { start: 14.45, end: 14.65, value: 'X' },
  ];

  private m = [...this.sync];
}
