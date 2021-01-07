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
import { AnalysisResultsPageComponent } from './analysis-results-page/analysis-results-page.component';
import { AnalysisResultsComponent } from './analysis-results/analysis-results.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AnalysisCompressionTableComponent } from './analysis-compression-table/analysis-compression-table.component';
import { AnalysisTensileTableComponent } from './analysis-tensile-table/analysis-tensile-table.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AnalysisChartComponent } from './analysis-chart/analysis-chart.component';
import { TensileChartComponent } from './analysis-chart/tensile-chart/tensile-chart.component';
import { CompressionChartComponent } from './analysis-chart/compression-chart/compression-chart.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SummaryChartComponent } from './analysis-chart/summary-chart/summary-chart.component';

@NgModule({
  declarations: [
    AnalysisComponent,
    MaterialPageComponent,
    TexturePageComponent,
    DataAnalysisPageComponent,
    AnalysisFormComponent,
    AnalysisFormPageComponent,
    AnalysisResultsPageComponent,
    AnalysisResultsComponent,
    AnalysisCompressionTableComponent,
    AnalysisTensileTableComponent,
    AnalysisChartComponent,
    TensileChartComponent,
    CompressionChartComponent,
    SummaryChartComponent
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
    MatTableModule,
    MatPaginatorModule,
    NgxChartsModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature(ANALYSIS_FEATURE_KEY, analysisReducers),
    EffectsModule.forFeature([AnalysisEffects]),
  ],
})
export class AnalysisModule {}
