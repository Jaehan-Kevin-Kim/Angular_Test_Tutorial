import { NgModule } from '@angular/core';
// import { initializeApp } from 'firebase/app';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { BUCKET } from '@angular/fire/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AskService } from './ask.service';
import { AuthGuard } from './auth.guard';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './login/login.component';


const fireEnvironment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyC1N4mZtybCQHI-ez8VmNsOjJYGybg6mo4",
    authDomain: "angulartutorial-153a0.firebaseapp.com",
    projectId: "angulartutorial-153a0",
    storageBucket: "angulartutorial-153a0.appspot.com",
    messagingSenderId: "575271177229",
    appId: "1:575271177229:web:a28de95a9e200ceab19944"
  }
};

const router: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'board', component: BoardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router, { enableTracing: false }),
    AngularFireModule.initializeApp(fireEnvironment.firebase, '/'),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [
    AskService,
    // {provide: BUCKET, useValue: fireEnvironment.firebase.storageBucket}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

