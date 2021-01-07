import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageGuardGuard } from './+state/manage-guard.guard';
import { AddFileComponent } from './add-file/add-file.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { AddResearchComponent } from './add-research/add-research.component';
import { AddResultComponent } from './add-result/add-result.component';
import { AddTextureComponent } from './add-texture/add-texture.component';
import { ManagePageComponent } from './manage-page/manage-page.component';

const routes: Routes = [
  {
    path: '',
    component: ManagePageComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-research',
        pathMatch: 'full',
        canActivate: [ManageGuardGuard],
      },
      {
        path: 'add-research',
        component: AddResearchComponent,
        canActivate: [ManageGuardGuard],
      },
      {
        path: 'add-result',
        component: AddResultComponent,
        canActivate: [ManageGuardGuard],
      },
      {
        path: 'add-material',
        component: AddMaterialComponent,
        canActivate: [ManageGuardGuard],
      },
      {
        path: 'add-texture',
        component: AddTextureComponent,
        canActivate: [ManageGuardGuard],
      },
      {
        path: 'add-file',
        component: AddFileComponent,
        canActivate: [ManageGuardGuard],
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
