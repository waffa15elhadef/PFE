import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSpecialitePageRoutingModule } from './detail-specialite-routing.module';

import { DetailSpecialitePage } from './detail-specialite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSpecialitePageRoutingModule
  ],
  declarations: [DetailSpecialitePage]
})
export class DetailSpecialitePageModule {}
