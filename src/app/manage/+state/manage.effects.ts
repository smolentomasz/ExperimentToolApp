import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { HeaderActions } from 'src/app/header/+state/header.actions';
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
  addMaterialSuccess = createEffect(
    () => () =>
      this.actions.pipe(
        ofType(ManageActions.addMaterialSuccess),
        tap(({responseMessage}) =>  this.toastr.success(responseMessage.responseMessage))
      ),
    { dispatch: false }
  );
  getAllMaterials = createEffect(() => () => this.actions.pipe(
    ofType(HeaderActions.headerInit, ManageActions.addMaterialSuccess),
    switchMap(() => this.manageService.getAllMaterials().pipe(take(1))),
    map(materials => ManageActions.materialsReceived({materials}))
  ));
  addTensileTestToDatabase = createEffect(
    () => () =>
      this.actions.pipe(
        ofType(ManageActions.addTensileTestButtonClicked),
        switchMap(({ newTensileTest }) =>
          this.manageService.addNewTensileTest(newTensileTest).pipe(take(1))
        ),
        map((responseMessage) => ManageActions.addTensileTestSuccess({responseMessage}))
      )
  );
  getAllTensileTests = createEffect(() => () => this.actions.pipe(
    ofType(HeaderActions.headerInit, ManageActions.addTensileTestSuccess),
    switchMap(() => this.manageService.getAllTensileTests().pipe(take(1))),
    map(tensileTests => ManageActions.tensileTestsReceived({tensileTests}))
  ));
  addTensileTestSuccess = createEffect(
    () => () =>
      this.actions.pipe(
        ofType(ManageActions.addTensileTestSuccess),
        tap(({responseMessage}) =>  this.toastr.success(responseMessage.responseMessage))
      ),
    { dispatch: false }
  );
  addCompressionTestToDatabase = createEffect(
    () => () =>
      this.actions.pipe(
        ofType(ManageActions.addCompressionTestButtonClicked),
        switchMap(({ newCompressionTest }) =>
          this.manageService.addNewCompressionTest(newCompressionTest).pipe(take(1))
        ),
        map((responseMessage) => ManageActions.addCompressionTestSuccess({responseMessage}))
      )
  );
  getAllCompressionTests = createEffect(() => () => this.actions.pipe(
    ofType(HeaderActions.headerInit, ManageActions.addCompressionTestSuccess),
    switchMap(() => this.manageService.getAllCompressionTests().pipe(take(1))),
    map(compressionTests => ManageActions.compressionTestsReceived({compressionTests}))
  ));
  addCompressionTestSuccess = createEffect(
    () => () =>
      this.actions.pipe(
        ofType(ManageActions.addCompressionTestSuccess),
        tap(({responseMessage}) =>  this.toastr.success(responseMessage.responseMessage))
      ),
    { dispatch: false }
  );
}
