import { Component, OnInit } from '@angular/core';
import {
  Onboarding,
  OnboardingConfig,
  OnboardingWelcome,
  TrialAuthenticator,
} from 'aliceonboarding';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sandboxToken: string;

  constructor() {}

  ngOnInit() {
    this.sandboxToken = 'userToken';

    this.launchOnboardingWelcome();
  }

  launchOnboardingWelcome() {
    let config = {
      language: 'en',
      requiredInfo: ['email'],
    };
    new OnboardingWelcome('alice-onboarding-mount', config).run(
      this.onUserInfo.bind(this),
      this.onCancel.bind(this)
    );
  }

  onUserInfo(userInfo) {
    let environment = 'staging';
    new TrialAuthenticator(this.sandboxToken, userInfo, environment)
      .execute()
      .then((userToken: string) => this.startOnboarding(userToken))
      .catch((error) => console.error(error));
  }

  startOnboarding(userToken: string): void {
    console.log('start onboarding');
    let config = new OnboardingConfig()
      .withUserToken(userToken)
      .withAddSelfieStage();
    new Onboarding('alice-onboarding-mount', config).run(
      this.onSuccess,
      this.onFailure,
      this.onCancel
    );
  }

  onSuccess() {
    console.log('sucess');
  }

  onFailure(error: any) {
    console.log('failure');
    console.error(error);
  }

  onCancel() {
    console.log('on cancel');
  }
}
