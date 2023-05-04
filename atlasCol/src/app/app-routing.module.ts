import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaImagensComponent } from './components/lista-imagens/lista-imagens.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'listarImagens',
    pathMatch: 'full'
  },
  {
    path:'listarImagens',
    component: ListaImagensComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
