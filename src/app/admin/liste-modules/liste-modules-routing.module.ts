import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeModulesPage } from './liste-modules.page';

const routes: Routes = [
  {
    path: '',
    component: ListeModulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeModulesPageRoutingModule {}
