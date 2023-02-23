import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeFavoritesComponent } from './large-favorites.component';
import { LargeFavoritesRoutingModule } from './large-favorites-routing.module';



@NgModule({
  declarations: [
    LargeFavoritesComponent
  ],
  imports: [
    CommonModule,
    LargeFavoritesRoutingModule
  ]
})
export class LargeFavoritesModule { }
