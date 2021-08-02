import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeSpecialitePage } from './liste-specialite.page';

const routes: Routes = [
  {
    path: '',
    component: ListeSpecialitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeSpecialitePageRoutingModule {}
