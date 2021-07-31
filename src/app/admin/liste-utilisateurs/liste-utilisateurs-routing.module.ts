import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeUtilisateursPage } from './liste-utilisateurs.page';

const routes: Routes = [
  {
    path: '',
    component: ListeUtilisateursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeUtilisateursPageRoutingModule {}
