import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtudiantparSpecialitePageRoutingModule } from './etudiantpar-specialite-routing.module';

import { EtudiantparSpecialitePage } from './etudiantpar-specialite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtudiantparSpecialitePageRoutingModule
  ],
  declarations: [EtudiantparSpecialitePage]
})
export class EtudiantparSpecialitePageModule {}
