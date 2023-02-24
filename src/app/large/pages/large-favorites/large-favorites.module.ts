import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeFavoritesComponent } from './large-favorites.component';
import { LargeFavoritesRoutingModule } from './large-favorites-routing.module';
import { UiModule } from 'src/app/ui/ui.module';



@NgModule({
  declarations: [
    LargeFavoritesComponent
  ],
  imports: [
    CommonModule,
    LargeFavoritesRoutingModule,
    UiModule
  ]
})
export class LargeFavoritesModule { }
