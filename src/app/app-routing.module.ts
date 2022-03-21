import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
  path: 'home',
  loadChildren: () => import('./modules/homee/home.module').then(m => m.HomeModule)
 },
 {
  path: 'animes',
  loadChildren: () => import('./modules/animes/anime.module').then(m => m.AnimeModule)
 },
 {
   path: '',
   redirectTo: '/home',
   pathMatch: 'full'
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
