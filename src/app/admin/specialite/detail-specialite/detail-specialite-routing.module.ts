import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSpecialitePage } from './detail-specialite.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSpecialitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSpecialitePageRoutingModule {}
