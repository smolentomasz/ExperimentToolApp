import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HeaderActions } from './header.actions';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { HeaderService } from './header.service';
import { User } from './header.model';

@Injectable()
export class HeaderEffects {
  constructor(private actions: Actions, private headerService: HeaderService) {}

  loginUser = createEffect(() => () =>
    this.actions.pipe(
      ofType(HeaderActions.loginButtonClicked),
      switchMap(({ user }) => this.headerService.loginUser(user).pipe(take(1))),
      map((user) => HeaderActions.userReceivedFromBackend({ user }))
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
