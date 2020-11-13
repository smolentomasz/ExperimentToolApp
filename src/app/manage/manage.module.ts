import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddResearchComponent } from './add-research/add-research.component';
import { AddResultComponent } from './add-result/add-result.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { AddTextureComponent } from './add-texture/add-texture.component';
import { AddFileComponent } from './add-file/add-file.component';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { ManageRoutingModule } from './manage-routing.module';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { manageFeatureKey, manageReducer } from './+state/manage.reducer';
import { ManageEffects } from './+state/manage.effects';
import { ToastrModule } from 'ngx-toastr';
import { MatSelectModule } from '@angular/material/select';
import { AddTensileComponent } from './add-research/add-tensile/add-tensile.component';
import { AddCompressionComponent } from './add-research/add-compression/add-compression.component';

@NgModule({
  declarations: [
    AddResearchComponent,
    AddResultComponent,
    AddMaterialComponent,
    AddTextureComponent,
    AddFileComponent,
    ManagePageComponent,
    AddTensileComponent,
    AddCompressionComponent
  ],
  imports: [CommonModule,
  ManageRoutingModule,
  TextFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  ToastrModule.forRoot(),
  StoreModule.forFeature(manageFeatureKey, manageReducer),
    EffectsModule.forFeature([ManageEffects]),
],
})
export class ManageModule {}
