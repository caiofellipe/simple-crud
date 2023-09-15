import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MainRoute: Routes = [
  { 
    path: 'home',
    loadChildren: () => import('../../pages/home/home.module').then((m) => m.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(MainRoute)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
export { MainRoute }
