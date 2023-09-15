import { NgModule } from '@angular/core';

import { UiModule } from 'src/app/shared/modules/ui.module';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home.component';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeDialogComponent
  ],
  imports: [
    UiModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
