import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { testFeatureKey, reducer } from './+state/header.reducer';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, LoginMenuComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forFeature(testFeatureKey, reducer),
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:  [HeaderComponent]
})
export class HeaderModule { }