import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailEtudiantPageRoutingModule } from './detail-etudiant-routing.module';

import { DetailEtudiantPage } from './detail-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailEtudiantPageRoutingModule
  ],
  declarations: [DetailEtudiantPage]
})
export class DetailEtudiantPageModule {}
