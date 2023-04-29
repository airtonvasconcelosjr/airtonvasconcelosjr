import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { FormularioComponent } from './views/formulario/formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { DadosComponent } from './views/dados/dados.component';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    DadosComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
