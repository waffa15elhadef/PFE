import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormEtudiantPage } from './form-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: FormEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormEtudiantPageRoutingModule {}
