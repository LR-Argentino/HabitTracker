import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth/';
import { Router } from '@angular/router';
import * as auth from 'firebase/compat/app';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  profileCredential: any = null;

  constructor(
    private afAuth: AngularFireAuth,
    private toaster: ToasterService,
    private router: Router
  ) {}

  loginViaGoogle() {
    this.afAuth
      .signInWithPopup(new auth.default.auth.GoogleAuthProvider())
      .then((res) => {
        this.profileCredential = res;
        this.toaster
          .presentToast('Login via Google', 'Login is successful')
          .then((res) => {
            this.router.navigate(['/tabs/pomodoro']);
          });
      })
      .catch((err) => {
        console.error('err');
      });
  }
}
