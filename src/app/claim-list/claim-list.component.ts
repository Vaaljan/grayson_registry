import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.scss']
})
export class ClaimListComponent implements OnInit {

  constructor(private db:AngularFirestore) { }
  gifts:Observable<any>;
  searchText:string = "";
  ngOnInit() {
      this.gifts = this.db.collection('gifts',ref=>ref.orderBy('name')).valueChanges();
  }





}
