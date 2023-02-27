import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LargeFavoritesComponent } from './large-favorites.component';

const routes: Routes = [
  {
    path: '', component: LargeFavoritesComponent, children: [
      { path: ':id', loadChildren: () => import('../large-edit/large-edit.module').then(m => m.LargeEditModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LargeFavoritesRoutingModule { }
