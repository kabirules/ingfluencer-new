import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//  constructor(public afa: AngularFireAuth, private router: Router) {
//    console.log('login-constructor');
//    var user = firebase.auth().currentUser;
//    if (user) {
//      this.router.navigateByUrl('/members');
//    } else {
//      // No user is signed in.
//    };    
//  }

constructor(public afa: AngularFireAuth, private router: Router) {
  //console.log('cons -> ' + this.afa.authState);
  //if(this.afa.authState) {
  //  this.router.navigateByUrl('/members');
  //};
}

  loginGoogle() {
    this.afa.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        console.log(err);
      })
  }

  ngOnInit() {
  }

}
