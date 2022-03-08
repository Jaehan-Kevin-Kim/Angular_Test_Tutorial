import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/compat/firestore';
import { AskService } from './ask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private askService: AskService, public auth: AngularFireAuth) {

    /*
    this.auth.user.subscribe(arg => {
      if (arg == undefined || arg == null) {
        this.auth.signInWithEmailAndPassword('admin', '1234').then(res => {
          console.log(res);
          // 쓰기, 수정, 삭제 등 행위 입력
        });
        // if (arg ==undefined || arg ==null){
        //   this.auth.signInWithEmailAndPassword('이메일주소', '비밀번호').then(res=>{
        //     console.log(res);
        //     // 쓰기, 수정, 삭제 등 행위 입력
        //   })
      } else {
        // 쓰기, 수정, 삭제 등 행위 입력
      }
    });
    */

    // this.DataBase = db;
    // askService.addItem('board', { number: 5, hello: 'hello', today: new Date() });
    askService.getItem('board').valueChanges({ idField: 'idx' }).subscribe((arg: any) => {
      //위 valueChanges()안에 {idField:'idx'}를 넣음으로써, idx 값이 출력이 되도록 변환 함. (이 부분은 잘 이해 안되긴 함)
      console.log("arg: ", arg);
    });
    // askService.testPipeTake();
    // askService.updateData3('board', { number: 10, new_text: 'hello updaters2' }, '7lujwaLwchCyV68oHFic')
    askService.updateData2('board', { new_text: 'only new new text2' }, 'NRU1udnenBCsuy1aA8Sl');
    // askService.updateData3('board', { new_text: 'only new new text' }, '7lujwaLwchCyV68oHFic')


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


