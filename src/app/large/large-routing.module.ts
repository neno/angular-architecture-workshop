import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LargeComponent } from './large.component';

const routes: Routes = [
  {
    path: '', component: LargeComponent, children: [
      { path: 'search', loadChildren: () => import('./pages/large-search/large-search.module').then(m => m.LargeSearchModule) },
      { path: 'favorites', loadChildren: () => import('./pages/large-favorites/large-favorites.module').then(m => m.LargeFavoritesModule) },
      { path: '', redirectTo: 'search', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LargeRoutingModule { }
