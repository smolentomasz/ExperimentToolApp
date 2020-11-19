import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis/analysis.component';
import { MaterialPageComponent } from './material-page/material-page.component';
import { TexturePageComponent } from './texture-page/texture-page.component';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { DataAnalysisPageComponent } from './data-analysis-page/data-analysis-page.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { analysisFeatureKey, analysisReducer } from './state+/analysis.reducer';
import { AnalysisEffects } from './state+/analysis.effects';

@NgModule({
  declarations: [
    AnalysisComponent,
    MaterialPageComponent,
    TexturePageComponent,
    DataAnalysisPageComponent,
  ],
  imports: [CommonModule,
  AnalysisRoutingModule,
  MatCardModule,
  MatFormFieldModule,
  StoreModule.forFeature(analysisFeatureKey, analysisReducer),
    EffectsModule.forFeature([AnalysisEffects]),],
})
export class AnalysisModule {}
