import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormModulePage } from './form-module.page';

const routes: Routes = [
  {
    path: '',
    component: FormModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormModulePageRoutingModule {}
