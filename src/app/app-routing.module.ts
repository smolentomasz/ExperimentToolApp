import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageGuardGuard } from './manage/+state/manage-guard.guard';

const routes: Routes = [
  {
    path: 'manage',
    loadChildren: () => import(`./manage/manage.module`).then((m) => m.ManageModule),
    //canActivate: [ManageGuardGuard]
  },
  {
    path: 'analysis',
    loadChildren: () => import(`./analysis/analysis.module`).then((m) => m.AnalysisModule),
  },
  { path: '**', redirectTo: 'analysis' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
