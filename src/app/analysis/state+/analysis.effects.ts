import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { map, switchMap, take } from 'rxjs/operators';
import { HeaderActions } from 'src/app/header/+state/header.actions';
import { ManageActions } from 'src/app/manage/+state/manage.actions';
import { AnalysisActions } from './analysis.actions';
import { AnalysisService } from './analysis.service';

@Injectable()
export class AnalysisEffects {
  constructor(
    private actions: Actions,
    private analysisService: AnalysisService,
    private toastr: ToastrService
  ) {}

  getAllTextures = createEffect(() => () =>
    this.actions.pipe(
      ofType(HeaderActions.headerInit, ManageActions.addTextureSuccess),
      switchMap(() => this.analysisService.getAllTextures().pipe(take(1))),
      map((textures) => AnalysisActions.texturesReceived({ textures }))
    )
  );

  loadAttempts = createEffect(() => () =>
    this.actions.pipe(
      ofType(AnalysisActions.researchNameChanged),
      switchMap(({ testId } ) =>
        this.analysisService.getAllAttemptsForTestId(testId).pipe(map(attempts => ({testId, attempts})))
      ),
      map(record => AnalysisActions.attemptsRecordReceived({ record })),
    )
  );
}
