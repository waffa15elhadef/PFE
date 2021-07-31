import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffectationFormPage } from './affectation-form.page';

const routes: Routes = [
  {
    path: '',
    component: AffectationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AffectationFormPageRoutingModule {}
