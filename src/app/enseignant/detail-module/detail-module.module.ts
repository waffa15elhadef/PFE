import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailModulePageRoutingModule } from './detail-module-routing.module';

import { DetailModulePage } from './detail-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailModulePageRoutingModule
  ],
  declarations: [DetailModulePage]
})
export class DetailModulePageModule {}
