import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LivrosComponent } from './livros/livros.component';
import { SeriesModule } from './series/series.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LivrosComponent,
    
  ],
  imports: [
    BrowserModule,
    SeriesModule,
   
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
