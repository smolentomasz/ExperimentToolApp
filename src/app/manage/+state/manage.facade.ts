import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CompressionTest, Material, ResearchType, TensileTest } from './manage.model';
import { ManageSelectors } from './manage.selectors';

@Injectable({
  providedIn: 'root',
})
export class ManageFacade {
  constructor(private store: Store<any>) {}

  materials$: Observable<Material[]> = this.store.select(
    ManageSelectors.selectMaterials
  );

  getResearches(type: ResearchType): Observable<TensileTest[] | CompressionTest[]>{
      return this.store.select(ManageSelectors.selectResearchesByResearchType({type}));
  }
}
