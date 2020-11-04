import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddResearchComponent } from './add-research/add-research.component';
import { AddResultComponent } from './add-result/add-result.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { AddTextureComponent } from './add-texture/add-texture.component';
import { AddFileComponent } from './add-file/add-file.component';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { ManageRoutingModule } from './manage-routing.module';

@NgModule({
  declarations: [
    AddResearchComponent,
    AddResultComponent,
    AddMaterialComponent,
    AddTextureComponent,
    AddFileComponent,
    ManagePageComponent,
  ],
  imports: [CommonModule,
  ManageRoutingModule],
})
export class ManageModule {}
