import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListesEtudiantsPageRoutingModule } from './listes-etudiants-routing.module';

import { ListesEtudiantsPage } from './listes-etudiants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListesEtudiantsPageRoutingModule
  ],
  declarations: [ListesEtudiantsPage]
})
export class ListesEtudiantsPageModule {}
