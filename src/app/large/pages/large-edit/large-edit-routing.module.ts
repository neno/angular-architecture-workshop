import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LargeEditComponent } from './large-edit.component';

const routes: Routes = [
  { path: '', component: LargeEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LargeEditRoutingModule { }
