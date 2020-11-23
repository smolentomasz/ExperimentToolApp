import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis/analysis.component';
import { MaterialPageComponent } from './material-page/material-page.component';
import { TexturePageComponent } from './texture-page/texture-page.component';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { DataAnalysisPageComponent } from './data-analysis-page/data-analysis-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AnalysisEffects } from './state+/analysis.effects';
import { AnalysisFormComponent } from './analysis-form/analysis-form.component';
import { AnalysisFormPageComponent } from './analysis-form-page/analysis-form-page.component';
import { analysisReducers, ANALYSIS_FEATURE_KEY } from './state+/analysis.reducers';

@NgModule({
  declarations: [
    AnalysisComponent,
    MaterialPageComponent,
    TexturePageComponent,
    DataAnalysisPageComponent,
    AnalysisFormComponent,
    AnalysisFormPageComponent,
  ],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    StoreModule.forFeature(ANALYSIS_FEATURE_KEY, analysisReducers),
    EffectsModule.forFeature([AnalysisEffects]),
  ],
})
export class AnalysisModule {}
