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
    this.displayToken = false;
    this.trialToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJpc3N1ZXItc2FuZGJveCIsInR5cCI6IlNBTkRCT1giLCJleHAiOjE3Mjc2OTU0NTEsImlhdCI6MTYxNTI4OTA1MSwiY2xpIjoiYWxpY2UtZGVtby1zdGFnaW5nIn0.cc3CLDMDO-tFTa61qM06YAYb_437eAZNlXDHgZQ2FxCu3ESVb7f7hCSaoXeoap6L_2HLkVZnzBbLK-27fi5Fr9a0j53JPuXhsHb2_vs2VEQxPTbsFAcwrn1lS-gTkYFH_5Mi0MLeURPw5p28dp66xk29zgdZfb26YAtyD-C_IHOtIAT6qaTfD4r2pCMrzd-41jUyfiaLXH6Z4y3_cQb7y7PyhnUCgVdVESycQCXytpBPzXV2gb9vIkS72_kp_mC60gOKIV5mS3bhVZbJ7RNg27Ratdhh8aVzcV4RUFHCqYg9JEggtlIZV7Z-fwogJoVjxa6-BRMKBnPTMfTJ-5hGRA';
    this.displayOnboarding = true;
  }

  trialTokenAdded(trialToken: string) {
    this.trialToken = trialToken;
    this.displayToken = false;
    this.displayOnboarding = true;
  }

  goBack(event: boolean) {
    this.displayToken = event;
  }
}
