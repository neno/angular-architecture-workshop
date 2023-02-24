import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'small', loadChildren: () => import('./small/small.module').then(m => m.SmallModule) },
  { path: 'medium', loadChildren: () => import('./medium/medium.module').then(m => m.MediumModule) },
  { path: 'large', loadChildren: () => import('./large/large.module').then(m => m.LargeModule) },
  { path: 'docs', loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
