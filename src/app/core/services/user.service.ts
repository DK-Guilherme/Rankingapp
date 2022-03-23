import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  public getUserByemail(login: {email: string, password: string}): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user?email=${login.email}&password=${login.password}`);
  }

  //public emailValidat(getUserById(), user.email)

  //O usuário vai entrar na tela
  //Ele vai digitar o email
  //Ele vai clicar no botão login
  // Quando clicar no botão ele vai chamar uma função
  //Essa função vai comparar o valor que ele inseriu e o valor de um dos itens do banco de dados
}
