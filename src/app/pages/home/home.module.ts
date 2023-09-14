import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UiModule } from 'src/app/shared/modules/ui.module';


@NgModule({
  declarations: [],
  imports: [
    UiModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
