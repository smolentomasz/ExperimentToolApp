import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'manage',
    loadChildren: () => import(`./manage/manage.module`).then((m) => m.ManageModule),
  },
  {
    path: 'analysis',
    loadChildren: () => import(`./analysis/analysis.module`).then((m) => m.AnalysisModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
