import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FairytalesPage } from './fairytales.page';

const routes: Routes = [
  {
    path: '',
    component: FairytalesPage,
  },
  {
    path: ':urlTag',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FairytalesPageRoutingModule {}
