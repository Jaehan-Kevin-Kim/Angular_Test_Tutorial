import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/compat/firestore';
import { AskService } from './ask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(askService: AskService) {
    // this.DataBase = db;
    // askService.addItem('board', { number: 5, hello: 'hello', today: new Date() });
    askService.getItem('board').valueChanges().subscribe((res: any) => {
      console.log(res);
    })
    askService.testPipeTake();


  }

  /*
  getItem(db_name: string) {
    this.itemCollection = this.DataBase.collection<any>(db_name, (ref: CollectionReference) => {
      console.log('ref: ', ref);
      // return ref
      // return ref.where('hello', '==', 'hahaha')
      // return ref.where('world', 'array-contains', 'aaa')
      return ref.orderBy('number', 'asc').startAt(1).limit(2);
    }); // 컬렉션에 접속  // this.DataBase.collection<any>(컬렉션 이름, 옵셔널 람다식(없어도 됨))
    return this.itemCollection.valueChanges();
  }
  */




}


