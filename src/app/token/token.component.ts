import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent {
  @Output() trialTokenEvent = new EventEmitter<string>();
  trialToken: string;

  getToken() {
    this.trialTokenEvent.emit(this.trialToken);
    this.trialToken = '';
  }
}
