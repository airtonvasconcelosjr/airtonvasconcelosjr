import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista-imagens',
  templateUrl: './lista-imagens.component.html',
  styleUrls: ['./lista-imagens.component.css']
})
export class ListaImagensComponent {

  abrirDescricao(colchao: any) {
    colchao.abrirDescricao = !colchao.abrirDescricao;
  }
  
  colchoes = [
    { id: 1, nome: '223', fabril:'king koil', imagem: 'assets/imagens/223.png', descricao: 'assets/imagens/223_desc.png', abrirDescricao: false },
    { id: 2, nome: '243', fabril:'king koil', imagem: 'assets/imagens/243.png', descricao: 'assets/imagens/243_desc.png', abrirDescricao: false },
    { id: 3, nome: '433', fabril:'king koil', imagem: 'assets/imagens/433.png', descricao: 'assets/imagens/433_desc.png', abrirDescricao: false },
    { id: 4, nome: '453', fabril:'king koil', imagem: 'assets/imagens/453.png', descricao: 'assets/imagens/453_desc.png', abrirDescricao: false },
    { id: 5, nome: '463', fabril:'king koil', imagem: 'assets/imagens/463.png', descricao: 'assets/imagens/463_desc.png', abrirDescricao: false },
    { id: 6, nome: '553', fabril:'king koil', imagem: 'assets/imagens/553.png', descricao: 'assets/imagens/553_desc.png', abrirDescricao: false },
  ];

  colchaoAberto: number | null = null;

  toggleDescricao(colchao: any) {
    if (colchao.abrirDescricao) {
      colchao.abrirDescricao = false;
      this.colchaoAberto = null;
    } else {
      if (this.colchaoAberto !== null) {
        this.colchoes[this.colchaoAberto].abrirDescricao = false;
      }
      colchao.abrirDescricao = true;
      this.colchaoAberto = colchao.id - 1;
    }
  }
  fabricantes = ['king koil', 'CBP'];

  fabricanteSelecionado = '';
  @Input() grupo: {
    id: number;
    nome: string;
    fabril: string;
    imagem: string;
    descricao: string;
    abrirDescricao: boolean;
  }[] = [];


  constructor() { }

  ngOnInit() {
  }

}

