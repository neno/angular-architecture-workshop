import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LargeEditRoutingModule } from './large-edit-routing.module';
import { LargeEditComponent } from './large-edit.component';
import { UiModule } from 'src/app/ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LargeEditComponent
  ],
  imports: [
    CommonModule,
    LargeEditRoutingModule,
    UiModule,
    ReactiveFormsModule
  ]
})
export class LargeEditModule { }
