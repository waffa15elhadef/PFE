import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormSpecialitePageRoutingModule } from './form-specialite-routing.module';

import { FormSpecialitePage } from './form-specialite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormSpecialitePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormSpecialitePage]
})
export class FormSpecialitePageModule {}
