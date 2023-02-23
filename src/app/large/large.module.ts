import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LargeRoutingModule } from './large-routing.module';
import { LargeComponent } from './large.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { LargeService } from './data-access/large.service';
import { HttpClientModule } from '@angular/common/http';
import { LargeEffects } from './store/effects';


@NgModule({
  declarations: [
    LargeComponent
  ],
  providers: [
    LargeService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LargeRoutingModule,
    StoreModule.forFeature('movies', reducers ),
    EffectsModule.forFeature([LargeEffects]),
  ]
})
export class LargeModule { }
