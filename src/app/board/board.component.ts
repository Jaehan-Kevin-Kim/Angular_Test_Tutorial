import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { url } from 'inspector';
import { AskService } from '../ask.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  // dashboardForm!: FormGroup;
  private file: any;
  private path = 'good/';
  url!: string;

  constructor(
    private storage: AngularFireStorage,
    private askService: AskService

  ) {

    // this.storage.ref('/good/Screen.png').getDownloadURL().subscribe(arg => {
    //   console.log("arg: ", arg);
    //   this.url = arg;

    // });

    // this.storage.ref('/good/screen.png').delete();


  }

  ngOnInit(): void {
    // this.dashboardForm = new FormGroup({
    //   'number': new FormControl(null, Validators.required),
    //   'fValue': new FormControl(null),
    //   'sValue': new FormControl(null),
    // })
  }

  uploadFile(event: any) {
    console.log("files: ", event.target.files);

    this.file = event.target.files[0];

  }

  send() {
    const ref = this.storage.upload(this.path + this.file.name, this.file); // this.storage.upload('파일이름', 파일) 이런식으로 하면 upload 가 됨

    console.log(ref);
  }

  deleteFile() {
    console.log('delete!');
    this.storage.ref('/good/Screen.png').delete();

  }

  /*
  onSubmit() {
    console.log(this.dashboardForm);
    this.askService.addItem('board', this.dashboardForm.value)
  }
*/

}
