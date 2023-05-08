import { Component } from '@angular/core';

@Component({
  selector: 'app-descricao-imagens',
  templateUrl: './descricao-imagens.component.html',
  styleUrls: ['./descricao-imagens.component.css']
})
export class DescricaoImagensComponent {
  descricaoColchao = false;
  imagemDescricao!: string;

  constructor() { }

  ngOnInit(): void {
  }

  abrirDescricao(imagem: string): void {
    this.descricaoColchao = true;
    this.imagemDescricao = imagem;
  }

  fecharDescricao(): void {
    this.descricaoColchao = false;
  }
}
