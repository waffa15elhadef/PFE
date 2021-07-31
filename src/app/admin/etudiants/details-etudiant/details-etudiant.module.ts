import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsEtudiantPageRoutingModule } from './details-etudiant-routing.module';

import { DetailsEtudiantPage } from './details-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsEtudiantPageRoutingModule
  ],
  declarations: [DetailsEtudiantPage]
})
export class DetailsEtudiantPageModule {}
