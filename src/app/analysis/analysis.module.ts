import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis/analysis.component';
import { MaterialPageComponent } from './material-page/material-page.component';
import { TexturePageComponent } from './texture-page/texture-page.component';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { DataAnalysisPageComponent } from './data-analysis-page/data-analysis-page.component';

@NgModule({
  declarations: [
    AnalysisComponent,
    MaterialPageComponent,
    TexturePageComponent,
    DataAnalysisPageComponent,
  ],
  imports: [CommonModule,
  AnalysisRoutingModule],
})
export class AnalysisModule {}
