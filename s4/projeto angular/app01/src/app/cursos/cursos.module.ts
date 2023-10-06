import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { EstudoComponent } from './estudo/estudo.component';



@NgModule({
  declarations: [
    CursosComponent,
    EstudoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
