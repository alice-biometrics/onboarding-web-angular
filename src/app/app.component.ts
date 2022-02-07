import { Component, OnInit } from '@angular/core';
import {
  OnboardingConfig,
  OnboardingWelcome,
  SandboxAuthenticator,
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
    new SandboxAuthenticator(this.sandboxToken, userInfo, environment)
      .execute()
      .then((userToken) => console.log(userToken))
      .catch((error) => console.error(error));
  }

    new Onboarding('alice-onboarding-mount', config).run(
      function (userInfo) {
        console.log(
          'Onboarding complete. User info: ' + JSON.stringify(userInfo)
        );
      },
      function (error) {
        console.error('Onboarding error. Error: ' + error.toString());
      },
      function () {
        console.log('Onboarding was canceled by the user');
      }
    );
  }

  onCancel() {
    console.log('on cancel');
  }
}
