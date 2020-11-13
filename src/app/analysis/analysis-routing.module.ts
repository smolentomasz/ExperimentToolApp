import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { DataAnalysisPageComponent } from './data-analysis-page/data-analysis-page.component';
import { MaterialPageComponent } from './material-page/material-page.component';
import { TexturePageComponent } from './texture-page/texture-page.component';

const routes: Routes = [
  {
    path: '',
    component: AnalysisComponent,
    children: [
      {
        path: '',
        redirectTo: 'data-analysis',
        pathMatch: 'full',
      },
      { path: 'data-analysis', component: DataAnalysisPageComponent },
      { path: 'material', component: MaterialPageComponent },
      { path: 'texture', component: TexturePageComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalysisRoutingModule {}
