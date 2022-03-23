import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { AnimeScoreComponent } from './anime-score/anime-score.component';


@NgModule({
  declarations: [
    AnimeListComponent,
    AnimeScoreComponent
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule
  ]
})
export class AnimeModule { }
