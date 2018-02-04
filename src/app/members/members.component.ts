import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  name: any;
  user: any;

  constructor(public afa: AngularFireAuth, private router: Router) {
    console.log('members');
    console.log(this.afa.authState);    
    if(this.afa.authState) {
      this.name = this.afa.auth.currentUser.email;
      console.log('already looged');
      console.log(this.name);
    };
  }

  logout() {
    this.afa.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
 }

  ngOnInit() {
  }

}
