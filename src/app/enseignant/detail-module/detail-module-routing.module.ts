import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailModulePage } from './detail-module.page';

const routes: Routes = [
  {
    path: '',
    component: DetailModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailModulePageRoutingModule {}
