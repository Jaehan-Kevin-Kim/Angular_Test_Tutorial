import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AskService } from '../ask.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  dashboardForm!: FormGroup;
  constructor(private askService: AskService) { }

  ngOnInit(): void {
    this.dashboardForm = new FormGroup({
      'number': new FormControl(null, Validators.required),
      'fValue': new FormControl(null),
      'sValue': new FormControl(null),
    })
  }

  onSubmit() {
    console.log(this.dashboardForm);
    this.askService.addItem('board', this.dashboardForm.value)
  }
}
