import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TokenComponent } from './token/token.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

@NgModule({
  declarations: [AppComponent, TokenComponent, OnboardingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
