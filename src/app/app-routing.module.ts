import { FormModulePageModule } from './admin/form-module/form-module.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  
  {
    path: 'enseignant/home',
    loadChildren: () => import('./enseignant/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin/home',
    loadChildren: () => import('./admin/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin/liste-utilisateurs',
    loadChildren: () => import('./admin/liste-utilisateurs/liste-utilisateurs.module').then( m => m.ListeUtilisateursPageModule)
  },
  {
    path: 'admin/liste-modules',
    loadChildren: () => import('./admin/liste-modules/liste-modules.module').then( m => m.ListeModulesPageModule)
  },
  {

    path: 'admin/etudiants/liste-etudiant',
    loadChildren: () => import('./admin/etudiants/liste-etudiant/liste-etudiant.module').then( m => m.ListeEtudiantPageModule)
  },
  {
    path: 'admin/etudiant/details-etudiant/:id',
    loadChildren: () => import('./admin/etudiants/details-etudiant/details-etudiant.module').then( m => m.DetailsEtudiantPageModule)
  },
  {
    path: 'admin/etudiant/form-etudiant',
    loadChildren: () => import('./admin/etudiants/form-etudiant/form-etudiant.module').then( m => m.FormEtudiantPageModule)
  },{
    path: 'admin/detail-module',
    loadChildren: () => import('./admin/detail-module/detail-module.module').then( m => m.DetailModulePageModule)
  },
  {
    path: 'admin/contenu-module',
    loadChildren: () => import('./admin/contenu-module/contenu-module.module').then( m => m.ContenuModulePageModule)
  },
  {
    path: 'admin/listes-enseignants',
    loadChildren: () => import('./admin/listes-enseignants/listes-enseignants.module').then( m => m.ListesEnseignantsPageModule)
  },
  {
    path: 'admin/detail-enseignant/:id',
    loadChildren: () => import('./admin/detail-enseignant/detail-enseignant.module').then( m => m.DetailEnseignantPageModule)
  },
  {
    path: 'admin/form-enseignant',
    loadChildren: () => import('./admin/form-enseignant/form-enseignant.module').then( m => m.FormEnseignantPageModule)
  },
  {
    path: 'admin/listes-etudiants',
    loadChildren: () => import('./admin/listes-etudiants/listes-etudiants.module').then( m => m.ListesEtudiantsPageModule)
  },
  {
    path: 'admin/detail-etudiant',
    loadChildren: () => import('./admin/detail-etudiant/detail-etudiant.module').then( m => m.DetailEtudiantPageModule)
  },
  {
    path: 'admin/etudiantpar-specialite',
    loadChildren: () => import('./admin/etudiantpar-specialite/etudiantpar-specialite.module').then( m => m.EtudiantparSpecialitePageModule)
  },
  {
    path: 'admin/form-etudiant',
    loadChildren: () => import('./admin/form-etudiant/form-etudiant.module').then( m => m.FormEtudiantPageModule)

  },
  {
    path: 'enseignant/bilan',
    loadChildren: () => import('./enseignant/bilan/bilan.module').then( m => m.BilanPageModule)
  },
  {
    path: 'enseignant/detail-module/:id',
    loadChildren: () => import('./enseignant/detail-module/detail-module.module').then( m => m.DetailModulePageModule)
  },
  {
    path: 'enseignant/fiche-module/:id',
    loadChildren: () => import('./enseignant/fiche-module/fiche-module.module').then( m => m.FicheModulePageModule)
  },
  {
    path: 'admin/affectation',
    loadChildren: () => import('./admin/affectation/affectation.module').then( m => m.AffectationPageModule)
  },
  {
    path: 'admin/affectation-form/:id',
    loadChildren: () => import('./admin/affectation-form/affectation-form.module').then( m => m.AffectationFormPageModule)
  },
  {
    path: 'admin/formModule',
    loadChildren: () => import('./admin/form-module/form-module.module').then( m => m.FormModulePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
