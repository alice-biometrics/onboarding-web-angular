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

  onboardingUrl = "https://signaturit.alicebiometrics.com/onboarding/";

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
    console.log("onboarding config ", config, this.onboardingUrl);
    new Onboarding('alice-onboarding-mount', config, this.onboardingUrl).run(
      this.onSuccess,
      this.onFailure,
      this.onCancel
    );
  }

  async onUserInfo(userInfo) {
    console.log("on user info ", userInfo)
    //let environment = 'staging';
    try {
      let userToken = await new TrialAuthenticator(this.trialToken, userInfo).execute();
      this.startOnboarding(userToken);
    } catch(error) {
      console.error("Error on Trial Authenticator", error);
    }
  
  }

  onCancel() {
    this.backEvent.emit(true);
  }

  onSuccess() {
    console.log('sucess');
  }

  onFailure(error: any) {
    console.log('failure on onboarding ');
    console.error(error);
  }
}
