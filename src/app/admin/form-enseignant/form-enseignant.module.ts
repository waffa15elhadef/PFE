import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormEnseignantPageRoutingModule } from './form-enseignant-routing.module';

import { FormEnseignantPage } from './form-enseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormEnseignantPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormEnseignantPage]
})
export class FormEnseignantPageModule {}
