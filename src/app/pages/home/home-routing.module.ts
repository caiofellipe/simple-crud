import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainRoute } from 'src/app/core/routing/main-routing.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: MainRoute
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
