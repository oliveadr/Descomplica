import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponents } from './components/header.components';
import { ComponentModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { ExercicioComponent } from './exercicio/exercicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
