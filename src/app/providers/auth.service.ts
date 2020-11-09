
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable()

export class AuthService {

  provider: firebase.auth.GoogleAuthProvider;

  constructor(public afAuth: AngularFireAuth) {

  this.provider = new firebase.auth.GoogleAuthProvider();

}

  loginWithGoogle() {

    return this.afAuth.signInWithRedirect(this.provider);

  }

  logout() {

    return this.afAuth.signOut();

  }

}
