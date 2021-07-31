import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsEtudiantPage } from './details-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsEtudiantPageRoutingModule {}
