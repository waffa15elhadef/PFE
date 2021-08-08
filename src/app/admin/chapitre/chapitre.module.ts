import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapitrePageRoutingModule } from './chapitre-routing.module';

import { ChapitrePage } from './chapitre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapitrePageRoutingModule
  ],
  declarations: [ChapitrePage]
})
export class ChapitrePageModule {}
