import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  name: any;
  user: any;

  userRef: AngularFireObject<any>;
  youtubeUserRef: AngularFireObject<any>;
  youtubeChannelUserRef: AngularFireObject<any>;
  item: Observable<any>;

  uid: string;
  youtubeId: string;

  constructor(public afa: AngularFireAuth, private router: Router, db: AngularFireDatabase) {
    if(this.afa.authState) {
      this.uid = this.afa.auth.currentUser.uid;
      this.name = this.afa.auth.currentUser.displayName==null?this.afa.auth.currentUser.email:this.afa.auth.currentUser.displayName;
      this.userRef = db.object('/users/'+this.uid);
      this.youtubeUserRef = db.object('/users/'+this.uid+"/youtube");
      this.youtubeChannelUserRef = db.object('/users/'+this.uid+"/youtube/channelId");
      this.item = this.youtubeChannelUserRef.valueChanges();
    };
  }

  ngOnInit() {
  }  

  logout() {
    this.afa.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  save() {
    this.youtubeUserRef.set({channelId:this.youtubeId});
  }
  update(newSize: string) {
    this.userRef.update({ size: newSize });
  }
  delete() {
    this.userRef.remove();
  }  

}
