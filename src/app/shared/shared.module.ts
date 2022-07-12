import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialUiModule } from '../shared/modules/material.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild({}),
    MaterialUiModule,
  ],
  exports: [
    MaterialUiModule,
    TranslateModule,
    HeaderComponent,
  ]
})
export class SharedModule { }
