import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormEnseignantPage } from './form-enseignant.page';

const routes: Routes = [
  {
    path: '',
    component: FormEnseignantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormEnseignantPageRoutingModule {}
