import { Component, EventEmitter, Output } from '@angular/core';
import { isValidToken } from '../../utils/jsonWebTokens';
@Component({
  selector: 'token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent {
  @Output() trialTokenEvent = new EventEmitter<string>();
  trialToken: string;
  errorTokenMsg: boolean;

  getToken() {
    if (!isValidToken(this.trialToken)) {
      this.errorTokenMsg = true;
      return;
    }
    this.trialTokenEvent.emit(this.trialToken);
    this.trialToken = '';
  }
}
