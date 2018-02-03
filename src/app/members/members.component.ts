import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  name: any;
  user: any;

  constructor(public afa: AngularFireAuth, private router: Router) {
    this.user = firebase.auth().currentUser;
    this.name = this.user.displayName;
    console.log(this.name);
    //console.log('login-constructor');
    //var user = firebase.auth().currentUser;
    //if (user) {
    //  this.router.navigateByUrl('/members');
    //} else {
    //  // No user is signed in.
    //};    
  }  

//  constructor(public afa: AngularFireAuth, private router: Router) {
//
//    if(this.afa.authState) {
//      this.name = this.afa.auth.currentUser;
//      console.log(this.name);
//      console.log(this.afa.authState);
//    };
//  }

  logout() {
    this.afa.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
 }

  ngOnInit() {
    //this.name = 'AARRASSSS'
    this.name = this.user.displayName;
  }

}
