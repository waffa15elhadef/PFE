import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeUtilisateursPageRoutingModule } from './liste-utilisateurs-routing.module';

import { ListeUtilisateursPage } from './liste-utilisateurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeUtilisateursPageRoutingModule
  ],
  declarations: [ListeUtilisateursPage]
})
export class ListeUtilisateursPageModule {}
