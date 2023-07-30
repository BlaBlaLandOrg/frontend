import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speech-bubble',
  templateUrl: './speech-bubble.component.html',
  styleUrls: ['./speech-bubble.component.scss'],
})
export class SpeechBubbleComponent {
  @Input() position = 'speech left';
  @Input() text: string;

}
