import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AffectationFormPageRoutingModule } from './affectation-form-routing.module';

import { AffectationFormPage } from './affectation-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AffectationFormPageRoutingModule
  ],
  declarations: [AffectationFormPage]
})
export class AffectationFormPageModule {}
