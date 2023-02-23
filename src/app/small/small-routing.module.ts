import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmallComponent } from './small.component';

const routes: Routes = [
  { path: '', component: SmallComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmallRoutingModule { }
