import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FicheModulePageRoutingModule } from './fiche-module-routing.module';

import { FicheModulePage } from './fiche-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FicheModulePageRoutingModule
  ],
  declarations: [FicheModulePage]
})
export class FicheModulePageModule {}
