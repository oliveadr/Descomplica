import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomePortal: string;
  cursos: string [] = ['Desenvolvimento Mobile', 'Dev Apps'
  ];


  constructor(){
    this.nomePortal='https://aulas.descomplica.com.br/';
    
    for(let i=0;i<this.cursos.length; i++){
      let cursos = this.cursos[i];
    }


  }
  ngOnInit(){}

}
