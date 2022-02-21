import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  trialToken: string;
  displayToken: boolean;
  displayOnboarding: boolean;

  constructor() {
    this.displayToken = true;
    this.displayOnboarding = false;
  }

  trialTokenAdded(trialToken: string) {
    this.trialToken = trialToken;
    this.displayToken = false;
    this.displayOnboarding = true;
  }
}
