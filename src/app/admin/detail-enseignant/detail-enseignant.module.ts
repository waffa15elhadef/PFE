import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailEnseignantPageRoutingModule } from './detail-enseignant-routing.module';

import { DetailEnseignantPage } from './detail-enseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailEnseignantPageRoutingModule
  ],
  declarations: [DetailEnseignantPage]
})
export class DetailEnseignantPageModule {}
