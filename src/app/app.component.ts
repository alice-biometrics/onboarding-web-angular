import { Component } from '@angular/core';
import { Onboarding, OnboardingConfig, DocumentType } from 'aliceonboarding';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular8-aliceonboarding';

  startOnboarding(): void {
    console.log('Hello');

    let config = new OnboardingConfig()
      .withUserToken('usertoken')
      .withAddSelfieStage()
      .withAddDocumentStage(DocumentType.IDCARD);

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

  ngOnInit() {
    this.startOnboarding();
  }
}
