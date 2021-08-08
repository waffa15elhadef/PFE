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
  },
  {
    path: 'liste-specialite',
    loadChildren: () => import('./specialite/liste-specialite/liste-specialite.module').then( m => m.ListeSpecialitePageModule)
  },
  {
    path: 'detail-specialite',
    loadChildren: () => import('./specialite/detail-specialite/detail-specialite.module').then( m => m.DetailSpecialitePageModule)
  },
  {
    path: 'form-specialite',
    loadChildren: () => import('./specialite/form-specialite/form-specialite.module').then( m => m.FormSpecialitePageModule)
  },
  {
    path: 'chapitre',
    loadChildren: () => import('./chapitre/chapitre.module').then( m => m.ChapitrePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
