import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SmallRoutingModule } from './small-routing.module';
import { SmallComponent } from './small.component';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [
    SmallComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SmallRoutingModule,
    UiModule
  ]
})
export class SmallModule { }
