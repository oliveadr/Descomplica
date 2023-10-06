import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-aula-01';
  descricao = 'coiso 1 aula angular';

  clientePremium = false;

  valor:{
    descricao: string,
    nome: string,
    id: number
  } = {
    descricao:'teste',
    nome: 'nome',
    id: 1
  }
}
