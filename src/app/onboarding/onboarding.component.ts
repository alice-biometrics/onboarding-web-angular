import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Onboarding,
  OnboardingConfig,
  OnboardingWelcome,
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
    new OnboardingWelcome('alice-onboarding-mount', config).run(
      this.onUserInfo.bind(this),
      this.onCancel.bind(this)
    );
  }

  startOnboarding(userToken: string) {
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

  onUserInfo(userInfo) {
    let environment = 'staging';
    new TrialAuthenticator(this.trialToken, userInfo, environment)
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
