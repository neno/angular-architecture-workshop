import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeSearchComponent } from './large-search.component';
import { LargeSearchRoutingModule } from './large-search-routing.module';
import { UiModule } from 'src/app/ui/ui.module';



@NgModule({
  declarations: [
    LargeSearchComponent
  ],
  imports: [
    CommonModule,
    LargeSearchRoutingModule,
    UiModule,
  ]
})
export class LargeSearchModule { }
