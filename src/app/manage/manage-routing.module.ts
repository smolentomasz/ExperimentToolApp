import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
        redirectTo: 'manage',
        pathMatch: 'full',
      },
      { path: 'add-research', component: AddResearchComponent },
      { path: 'add-result', component: AddResultComponent },
      { path: 'add-material', component: AddMaterialComponent },
      { path: 'add-texture', component: AddTextureComponent },
      { path: 'add-file', component: AddFileComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
