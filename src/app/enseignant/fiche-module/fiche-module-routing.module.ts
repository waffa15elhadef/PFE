import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FicheModulePage } from './fiche-module.page';

const routes: Routes = [
  {
    path: '',
    component: FicheModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FicheModulePageRoutingModule {}
