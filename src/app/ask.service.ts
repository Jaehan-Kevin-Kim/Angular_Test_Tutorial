import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  private DataBase: AngularFirestore;
  // private itemCollection!: AngularFirestoreCollection<any>;
  private collectionArray: any = [{}];


  private readonly storage = {
    id: 'admin',
    password: '1234'
  }
  constructor(db: AngularFirestore) {
    // this.test1().subscribe((arg: any) => {
    //   console.log(arg);
    // })
    // this.test1().subscribe((arg: any) => {
    //   console.log(arg);
    // })
    this.DataBase = db;
  }

  testPipeTake() {
    this.DataBase.collection<any>("test").stateChanges().pipe(take(1), map(actions => {
      console.log("actions with pipe map", actions);

      /*
      return actions.map(a => {
        console.log("map within pipe map", a);
        // return a.payload.doc.data()
        return 1234
        */
      return 1234;
    }))
      .subscribe(arg => { console.log('pipeTake stateChanges: ', arg) }
      )
    // this.DataBase.collection<any>("test").stateChanges().pipe(take(1)).subscribe(arg => { console.log('pipeTake stateChanges: ', arg) }
    // )
  }

  getItem(db_name: string) {
    if (this.collectionArray[db_name]) {
      this.collectionArray[db_name] = null;
    }
    this.collectionArray[db_name] = this.DataBase.collection<any>(db_name, (ref: CollectionReference) => {
      return ref
    })
    return this.collectionArray[db_name];

    /*    this.itemCollection = this.DataBase.collection<any>(db_name, (ref: CollectionReference) => {
          return ref;
        })
        return this.itemCollection*/
  }

  addItem(db_name: string, data: any) {
    if (this.collectionArray[db_name] == null) {
      this.collectionArray[db_name] = this.DataBase.collection<any>(db_name);
    }
    this.collectionArray[db_name].add(data);

    /*if (this.itemCollection == null) {
      this.itemCollection = this.DataBase.collection<any>(db_name);
    }
    this.itemCollection.add(data);*/

  }

  updateData(db_name: string, parameter: any, target_id: any) {
    this.collectionArray[db_name].stateChanges().pipe(take(1), map((actions: any) => {
      return actions.map((a: any) => {
        // this.collectionArray[db_name].stateChanges().pipe(map((actions: any) => {
        //   return actions.map((a: any) => {
        const data = a.payload.doc.data(); // 데이터
        const ID = a.payload.doc.id; // 고유 키 값
        if (target_id == ID) {
          this.collectionArray[db_name].doc(ID).update(parameter);
        }
        return data;
      })
    })
    ).subscribe();
  }

  updateData2(db_name: string, parameter: any, target_id: any) {
    this.collectionArray[db_name].doc(target_id).update(parameter);
  }

  updateData3(db_name: string, parameter: any, target_id: any) {
    this.collectionArray[db_name].doc(target_id).set(parameter);
  }

  deleteData(db_name: string, target_id: any) {
    this.collectionArray[db_name].doc(target_id).delete();
  }

  test1() {
    return new Observable((arg) => {
      arg.next({ test: 1 });
      arg.next({ test: 2 })
      arg.next({ test: 3 })
      arg.complete();
    })
  }

  tryToLogin(param: any) {
    const observable = new Observable(arg => {
      if (param.id === this.storage.id && param.password === this.storage.password) {
        arg.next({ status: true })
        localStorage.setItem('status', 'true');
      } else {
        arg.next({ status: false, reason: 'wrong information' })
      }
      arg.complete();
    })

    return observable;
  }
  readonly isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isLoggedIn(): void {
    if (localStorage.getItem('status') === 'true') {
      this.isLogged.next(true);
    } else {
      this.isLogged.next(false);
    }
  }


}



