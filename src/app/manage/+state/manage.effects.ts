import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { ManageActions } from './manage.actions';
import { ManageService } from './manage.service';

@Injectable()
export class ManageEffects {
  constructor(private actions: Actions, private manageService: ManageService, private toastr: ToastrService) {}

  addMaterialToDatabase = createEffect(
    () => () =>
      this.actions.pipe(
        ofType(ManageActions.addMaterialButtonClicked),
        switchMap(({ materialForm }) =>
          this.manageService.addNewMaterial(materialForm).pipe(take(1))
        ),
        map((responseMessage) => ManageActions.addMaterialSuccess({responseMessage}))
      )
  );
  addMaterialSucces = createEffect(
    () => () =>
      this.actions.pipe(
        ofType(ManageActions.addMaterialSuccess),
        tap(({responseMessage}) =>  this.toastr.success(responseMessage.responseMessage))
      ),
    { dispatch: false }
  );
}
