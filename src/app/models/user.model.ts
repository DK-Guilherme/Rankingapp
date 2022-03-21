import { Animes } from "./animes.model";


export interface User {
  id?: number;
  email: string;
  password: string;
  name: string;
  animeList: Animes[];
}
