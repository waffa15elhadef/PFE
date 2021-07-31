import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListesEtudiantsPage } from './listes-etudiants.page';

const routes: Routes = [
  {
    path: '',
    component: ListesEtudiantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListesEtudiantsPageRoutingModule {}
