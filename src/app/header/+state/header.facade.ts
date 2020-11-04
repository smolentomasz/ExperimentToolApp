import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './header.model';
import { HeaderSelectors } from './header.selectors';

@Injectable({
  providedIn: 'root',
})
export class HeaderFacade {
  constructor(private store: Store<any>) {}

  isLoginLoading$: Observable<boolean> = this.store.select(
    HeaderSelectors.selectIsLoginLoading
  );
  user$: Observable<User> = this.store.select(
    HeaderSelectors.selectUser
  );
}
