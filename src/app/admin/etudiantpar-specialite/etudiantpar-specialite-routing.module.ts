import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtudiantparSpecialitePage } from './etudiantpar-specialite.page';

const routes: Routes = [
  {
    path: '',
    component: EtudiantparSpecialitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtudiantparSpecialitePageRoutingModule {}
