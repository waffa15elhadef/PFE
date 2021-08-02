import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeSpecialitePageRoutingModule } from './liste-specialite-routing.module';

import { ListeSpecialitePage } from './liste-specialite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeSpecialitePageRoutingModule
  ],
  declarations: [ListeSpecialitePage]
})
export class ListeSpecialitePageModule {}
