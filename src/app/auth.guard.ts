import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AskService } from './ask.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private status: boolean = false;

  constructor(private askService: AskService) {

    askService.isLogged.subscribe(result => {
      console.log('server에 물어보고 얻은 결과', result)
      this.status = result;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("guard running");
    this.askService.isLoggedIn();
    return this.status;

    // return true;
  }
}
