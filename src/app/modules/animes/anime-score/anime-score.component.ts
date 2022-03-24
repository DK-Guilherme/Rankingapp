import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimesService } from '../../../core/services/animes.service';
import { Animes } from '../../../models/animes.model';

@Component({
  selector: 'app-anime-score',
  templateUrl: './anime-score.component.html',
  styleUrls: ['./anime-score.component.scss']
})
export class AnimeScoreComponent implements OnInit {

  anime!: Animes;

  constructor(
    private route: ActivatedRoute,
    private service: AnimesService
  ) { }

  ngOnInit(): void {
  }

  getAnime(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== undefined && id!== null) {
      this.service.getById(parseInt(id)).subscribe({
        next: (anime) => (this.anime = anime)
      })
    }
  }
}
