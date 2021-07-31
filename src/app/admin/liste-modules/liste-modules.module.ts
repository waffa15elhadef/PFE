import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeModulesPageRoutingModule } from './liste-modules-routing.module';

import { ListeModulesPage } from './liste-modules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeModulesPageRoutingModule
  ],
  declarations: [ListeModulesPage]
})
export class ListeModulesPageModule {}
