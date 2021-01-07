import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ManageService } from './manage.service';
import { Store } from '@ngrx/store';
import { ManageActions } from './manage.actions';
import { User } from 'src/app/header/+state/header.model';
import { HeaderFacade } from 'src/app/header/+state/header.facade';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ManageGuardGuard implements CanActivate {
  constructor(
    private manageService: ManageService,
    private store: Store<any>,
    private headerFacade: HeaderFacade,
    private router: Router,
    private toastr: ToastrService
  ) {}
  private user: User;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.headerFacade.user$.subscribe((user) => {
      if (!!!user) {
        this.router.navigate(['analysis']);
        return false;
      }
    });

    if (!this.manageService.isAuthorized()) {
      let userToRefresh: User;
      this.headerFacade.user$.subscribe((user) => (userToRefresh = user));
      this.store.dispatch(ManageActions.tokenExpired({ user: userToRefresh }));
    }

    return true;
  }
}
