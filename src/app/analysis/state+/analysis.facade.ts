import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Texture } from './analysis.model';
import { AnalysisSelectors } from './analysis.selectors';

@Injectable({
  providedIn: 'root',
})
export class AnalysisFacade {
  constructor(private store: Store<any>) {}
  textures$: Observable<Texture[]> = this.store.select(
    AnalysisSelectors.selectTextures
  );
}
