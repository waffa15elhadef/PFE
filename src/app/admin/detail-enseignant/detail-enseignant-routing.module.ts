import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailEnseignantPage } from './detail-enseignant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEnseignantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailEnseignantPageRoutingModule {}
