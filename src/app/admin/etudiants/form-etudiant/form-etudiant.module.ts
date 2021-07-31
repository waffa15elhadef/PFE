import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormEtudiantPageRoutingModule } from './form-etudiant-routing.module';

import { FormEtudiantPage } from './form-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormEtudiantPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormEtudiantPage]
})
export class FormEtudiantPageModule {}
