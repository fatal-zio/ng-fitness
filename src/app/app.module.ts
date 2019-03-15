import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './features/auth/signup/signup.component';
import { LoginComponent } from './features/auth/login/login.component';
import { TrainingComponent } from './features/training/training.component';
import { CurrentTrainingComponent } from './features/training/current-training/current-training.component';
import { NewTrainingComponent } from './features/training/new-training/new-training.component';
import { PastTrainingComponent } from './features/training/past-training/past-training.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
