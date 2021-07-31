import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenuModulePage } from './contenu-module.page';

const routes: Routes = [
  {
    path: '',
    component: ContenuModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenuModulePageRoutingModule {}
