import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'livros', component: LivrosComponent},
  {path: 'login', component:LoginComponent},
  {path: '',component:HomeComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
