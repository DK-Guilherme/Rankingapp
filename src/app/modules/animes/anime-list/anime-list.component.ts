import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { AnimesService } from '../../../core/services/animes.service';
import { Animes } from '../../../models/animes.model';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {

  animeList!: Animes[]

  constructor(private service: AnimesService) { }

  ngOnInit(): void {
    this.getAnimes();
  }

  getAnimes(): void{
    this.service.getAll().subscribe(animeList => {
      this.animeList = animeList
      console.log(animeList);
    });
  }

}
