import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './views/formulario/formulario.component';
import { DadosComponent } from './views/dados/dados.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'dados', component: DadosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
