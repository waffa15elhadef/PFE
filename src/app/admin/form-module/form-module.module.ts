import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormModulePageRoutingModule } from './form-module-routing.module';

import { FormModulePage } from './form-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormModulePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormModulePage]
})
export class FormModulePageModule {}
