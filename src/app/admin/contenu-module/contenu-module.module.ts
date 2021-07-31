import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenuModulePageRoutingModule } from './contenu-module-routing.module';

import { ContenuModulePage } from './contenu-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenuModulePageRoutingModule
  ],
  declarations: [ContenuModulePage]
})
export class ContenuModulePageModule {}
