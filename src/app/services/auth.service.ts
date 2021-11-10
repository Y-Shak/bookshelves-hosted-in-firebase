import { Injectable } from '@angular/core';
// import * as firebase from 'firebase';
import firebase from "firebase";
// import { AngularFireAuth } from "@angular/fire/auth";
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    // public afAuth: AngularFireAuth,  // injecter le service auth de firebase 
    public router: Router
  ) { }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve('creation reussie');
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }


  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve('connexion reussie');
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
  signOutUser() {
    firebase.auth().signOut();
  }
}
