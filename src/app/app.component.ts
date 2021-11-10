import { Component } from '@angular/core';
// import * as firebase from 'firebase';

import firebase from "firebase";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

    const firebaseConfig = {
      apiKey: "AIzaSyAbHBQPwGviBB9VjYS1GZndWqbFe8E0Ne0",
      authDomain: "bookshelves-ccd77.firebaseapp.com",
      projectId: "bookshelves-ccd77",
      storageBucket: "bookshelves-ccd77.appspot.com",
      messagingSenderId: "524499473864",
      appId: "1:524499473864:web:6171fb338e4a49fbcd5cfd",
      measurementId: "G-TXN01ZQLYK"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
