import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialUiModule } from 'src/app/shared/modules/material.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MaterialUiModule,
  ],
  exports: [
    MaterialUiModule,

    HeaderComponent
  ]
})
export class SharedModule { }
