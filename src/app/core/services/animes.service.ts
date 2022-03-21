import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animes } from '../../models/animes.model';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Animes[]> {
    return this.http.get<Animes[]>(`${this.apiUrl}/animesList`)
  }
}
