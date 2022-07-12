import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './artists.component';

@NgModule({
  declarations: [
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,

    SharedModule
  ]
})
export class ArtistsModule { }
