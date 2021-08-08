import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapitrePage } from './chapitre.page';

const routes: Routes = [
  {
    path: '',
    component: ChapitrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapitrePageRoutingModule {}
