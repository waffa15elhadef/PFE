import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailEtudiantPage } from './detail-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailEtudiantPageRoutingModule {}
