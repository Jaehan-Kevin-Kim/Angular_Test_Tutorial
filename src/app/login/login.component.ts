import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AskService } from '../ask.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  id: string = '';
  password: string = '';

  constructor(private askService: AskService, private router: Router) { }

  ngOnInit(): void {
  }


  private subscription!: Subscription; //subscribe 동작 후 만들어지는 대상


  login() {
    console.log(this.id, this.password);
    this.askService.tryToLogin({ id: this.id, password: this.password }).subscribe((arg: any) => {
      console.log("console arg: ", arg)
      if (arg.status === true) {
        alert('login success')
        this.router.navigate(['/board']);

      }

    }

    )

  }



  ngOnDestroy(): void {
    console.log(this.subscription);
    if (this.subscription) {
      this.subscription.unsubscribe(); //구독 종료
    }


  }

}
