import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ManageService } from './manage.service';
import { Store } from '@ngrx/store';
import { ManageActions } from './manage.actions';
import { User } from 'src/app/header/+state/header.model';

@Injectable({
  providedIn: 'root'
})
export class ManageGuardGuard implements CanActivate {
  constructor(private manageService: ManageService, private store: Store<any>){}
  private user: User;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.manageService.isAuthorized()){
        return true;
      }
      this.user = {
        username: localStorage.getItem('username'),
        token: localStorage.getItem('token'),
        refreshToken: localStorage.getItem('refreshToken')
      };

      this.store.dispatch(
        ManageActions.tokenExpired({
          user: this.user
        })
      );
      return false;
  }
  
}
