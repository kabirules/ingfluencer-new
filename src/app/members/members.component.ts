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

  itemRef: AngularFireObject<any>;
  item: Observable<any>;

  constructor(public afa: AngularFireAuth, private router: Router, db: AngularFireDatabase) {
    console.log('members');
    console.log(this.afa.authState);    
    if(this.afa.authState) {
      this.name = this.afa.auth.currentUser.email;
      console.log('already looged');
      console.log(this.name);
      this.itemRef = db.object('item');
      this.item = this.itemRef.valueChanges();
    };
  }

  ngOnInit() {
  }  

  logout() {
    this.afa.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value.youtubeId);
    }
  }

  save(newName: string) {
    this.itemRef.set({ name: newName });
  }
  update(newSize: string) {
    this.itemRef.update({ size: newSize });
  }
  delete() {
    this.itemRef.remove();
  }  

}
