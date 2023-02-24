import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeDetailComponent } from './large-detail.component';
import { LargeDetailRoutingModule } from './large-detail-routing.module';
import { UiModule } from 'src/app/ui/ui.module';



@NgModule({
  declarations: [
    LargeDetailComponent
  ],
  imports: [
    CommonModule,
    LargeDetailRoutingModule,
    UiModule
  ]
})
export class LargeDetailModule { }
