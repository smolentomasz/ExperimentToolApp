import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HeaderActions } from './header.actions';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { HeaderService } from './header.service';
import { User } from './header.model';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';

@Injectable()
export class HeaderEffects {
  constructor(
    private actions: Actions,
    private headerService: HeaderService,
    private toastr: ToastrService
  ) {}

  loginUser = createEffect(() => () =>
    this.actions.pipe(
      ofType(HeaderActions.loginButtonClicked),
      switchMap(({ user }) =>
        this.headerService.loginUser(user).pipe(
          take(1),
          map((loggedUser) => HeaderActions.userReceivedFromBackend({ user: loggedUser })),
          catchError(({ error }) => {
            this.toastr.error(error.responseMessage);
            return of(HeaderActions.loginError());
          })
        )
      )
    )
  );
  setToken = createEffect(
    () => () =>
      this.actions.pipe(
        ofType(HeaderActions.userReceivedFromBackend),
        tap(({ user }) => {
          localStorage.setItem('username', user.username);
          localStorage.setItem('token', user.token);
          localStorage.setItem('refreshToken', user.refreshToken);
        })
      ),
    { dispatch: false }
  );
  logoutUser = createEffect(
    () => () =>
      this.actions.pipe(
        ofType(HeaderActions.logoutButtonClicked),
        tap(() => {
          localStorage.clear();
        })
      ),
    { dispatch: false }
  );
  getTokenOnStart = createEffect(() => () =>
    this.actions.pipe(
      ofType(HeaderActions.headerInit),
      map(
        () =>
          ({
            username: localStorage.getItem('username'),
            token: localStorage.getItem('token'),
            refreshToken: localStorage.getItem('refreshToken'),
          } as User)
      ),
      filter(
        ({ username, token, refreshToken }) =>
          !!username && !!token && !!refreshToken
      ),
      map((user) => HeaderActions.userReceivedFromLocalStorage({ user }))
    )
  );
}
