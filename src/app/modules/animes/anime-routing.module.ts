import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeScoreComponent } from './anime-score/anime-score.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeListComponent
  },
  {
    path: 'review/:id',
    component: AnimeScoreComponent
  },
  {
    path: '',
    redirectTo: 'animes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
