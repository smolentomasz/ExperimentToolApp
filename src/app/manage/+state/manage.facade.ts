import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AdditionalFile,
  CompressionTest,
  DownloadFileModel,
  Material,
  ResearchType,
  TensileTest,
} from './manage.model';
import { ManageSelectors } from './manage.selectors';

@Injectable({
  providedIn: 'root',
})
export class ManageFacade {
  constructor(private store: Store<any>) {}

  materials$: Observable<Material[]> = this.store.select(
    ManageSelectors.selectMaterials
  );
  additionalFiles$: Observable<AdditionalFile[]> = this.store.select(
    ManageSelectors.selectAdditionalFiles
  );
  file$: Observable<DownloadFileModel> = this.store.select(
    ManageSelectors.selectDownloadFile
  );
  selectIsAdditionalFileAdding$: Observable<boolean> = this.store.select(
    ManageSelectors.selectIsAdditionalFileAdding
  );
  selectisFileDownloading$: Observable<boolean> = this.store.select(
    ManageSelectors.selectisFileDownloading
  );
  selectisCompressionResultAdding$: Observable<boolean> = this.store.select(
    ManageSelectors.selectisCompressionResultAdding
  );
  selectisCompressionTestAdding$: Observable<boolean> = this.store.select(
    ManageSelectors.selectisCompressionTestAdding
  );
  selectisTensileResultAdding$: Observable<boolean> = this.store.select(
    ManageSelectors.selectisTensileResultAdding
  );
  selectisTensileTestAdding$: Observable<boolean> = this.store.select(
    ManageSelectors.selectisTensileTestAdding
  );
  selectisTextureAdding$: Observable<boolean> = this.store.select(
    ManageSelectors.selectisTextureAdding
  );
  selectisMaterialAdding$: Observable<boolean> = this.store.select(
    ManageSelectors.selectisMaterialAdding
  );
  getResearches(
    type: ResearchType
  ): Observable<TensileTest[] | CompressionTest[]> {
    return this.store.select(
      ManageSelectors.selectResearchesByResearchType({ type })
    );
  }
}
