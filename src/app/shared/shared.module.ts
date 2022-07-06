import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialUiModule } from 'src/app/shared/modules/material.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
  ],
  exports: [
    MaterialUiModule,

    HeaderComponent
  ]
})
export class SharedModule { }
