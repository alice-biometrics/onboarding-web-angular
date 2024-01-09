import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Onboarding,
  OnboardingConfig,
  TrialAuthenticator,
} from 'aliceonboarding';

@Component({
  selector: 'onboarding',
  templateUrl: './onboarding.component.html',
})
export class OnboardingComponent implements OnInit {
  @Input() trialToken: string;
  @Output() backEvent = new EventEmitter<boolean>(false);

  ngOnInit() {
    this.launchOnboardingWelcome();
  }

  launchOnboardingWelcome() {
    console.log('launched onboarding process');
    let config = {
      language: 'en',
      requiredInfo: ['email'],
    };
    const email = Math.random().toString(36).substring(5) + `@alice.com`;
    this.onUserInfo({ email });
  }

  startOnboarding(userToken: string) {
    console.log('start onboarding');

    let config = new OnboardingConfig()
      .withUserToken(userToken)
      .withAddSelfieStage({});
    new Onboarding({
      idSelector: 'alice-onboarding-mount',
      onboardingConfig: config,
    }).run(this.onSuccess, this.onFailure, this.onCancel);
  }

  onUserInfo(userInfo) {
    console.log('user info ', userInfo);
    let environment = 'staging';
    new TrialAuthenticator({
      sandboxToken: this.trialToken,
      userInfo,
      environment,
    })
      .execute()
      .then((userToken: string) => this.startOnboarding(userToken))
      .catch((error) => console.error(error));
  }

  onCancel() {
    this.backEvent.emit(true);
  }

  onSuccess() {
    console.log('sucess');
  }

  onFailure(error: any) {
    console.log('failure');
    console.error(error);
  }
}
