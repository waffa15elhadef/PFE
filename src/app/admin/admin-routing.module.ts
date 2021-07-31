import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'detail-affectation',
    loadChildren: () => import('./detail-affectation/detail-affectation.module').then( m => m.DetailAffectationPageModule)
  },
  {
    path: 'affectation-form',
    loadChildren: () => import('./affectation-form/affectation-form.module').then( m => m.AffectationFormPageModule)
  },
  {
    path: 'form-module',
    loadChildren: () => import('./form-module/form-module.module').then( m => m.FormModulePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
