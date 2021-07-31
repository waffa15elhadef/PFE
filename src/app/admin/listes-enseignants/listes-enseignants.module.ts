import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListesEnseignantsPageRoutingModule } from './listes-enseignants-routing.module';

import { ListesEnseignantsPage } from './listes-enseignants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListesEnseignantsPageRoutingModule
  ],
  declarations: [ListesEnseignantsPage]
})
export class ListesEnseignantsPageModule {}
