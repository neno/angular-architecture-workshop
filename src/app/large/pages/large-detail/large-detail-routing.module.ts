import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LargeDetailComponent } from './large-detail.component';

const routes: Routes = [
  {
    path: '', component: LargeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LargeDetailRoutingModule { }
