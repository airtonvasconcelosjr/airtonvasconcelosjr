import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-lista-imagens',
  templateUrl: './lista-imagens.component.html',
  styleUrls: ['./lista-imagens.component.css']
})
export class ListaImagensComponent {
  
  abrirDescricao(colchao: any) {
    colchao.abrirDescricao = !colchao.abrirDescricao;
  }
  
  king = [
    { id: 1, nome: '223', fabril:'King Koil', imagem: 'assets/imagens/223.png', descricao: 'assets/imagens/223_desc.png', abrirDescricao: false },
    { id: 2, nome: '243', fabril:'King Koil', imagem: 'assets/imagens/243.png', descricao: 'assets/imagens/243_desc.png', abrirDescricao: false },
    { id: 3, nome: '433', fabril:'King Koil', imagem: 'assets/imagens/433.png', descricao: 'assets/imagens/433_desc.png', abrirDescricao: false },
    { id: 4, nome: '453', fabril:'King Koil', imagem: 'assets/imagens/453.png', descricao: 'assets/imagens/453_desc.png', abrirDescricao: false },
    { id: 5, nome: '463', fabril:'King Koil', imagem: 'assets/imagens/463.png', descricao: 'assets/imagens/463_desc.png', abrirDescricao: false },
    { id: 6, nome: '553', fabril:'King Koil', imagem: 'assets/imagens/553.png', descricao: 'assets/imagens/553_desc.png', abrirDescricao: false },
    { id: 7, nome: '573', fabril:'King Koil', imagem: 'assets/imagens/573.png', descricao: 'assets/imagens/573_desc.png', abrirDescricao: false },
    { id: 8, nome: '633', fabril:'King Koil', imagem: 'assets/imagens/633.png', descricao: 'assets/imagens/633_desc.png', abrirDescricao: false },
    { id: 9, nome: '763', fabril:'King Koil', imagem: 'assets/imagens/763.png', descricao: 'assets/imagens/763_desc.png', abrirDescricao: false },
    { id: 10, nome: '853', fabril:'King Koil', imagem: 'assets/imagens/853.png', descricao: 'assets/imagens/853_desc.png', abrirDescricao: false },
    
  ];
  mercosul = [
    { id: 11, nome: '232', fabril:'Mercosul', imagem: 'assets/imagens/232.png', descricao: 'assets/imagens/232_desc.png', abrirDescricao: false },
    { id: 12, nome: '452', fabril:'Mercosul', imagem: 'assets/imagens/452.png', descricao: 'assets/imagens/452_desc.png', abrirDescricao: false },
    { id: 13, nome: '562', fabril:'Mercosul', imagem: 'assets/imagens/562.png', descricao: 'assets/imagens/562_desc.png', abrirDescricao: false },
    { id: 14, nome: '672', fabril:'Mercosul', imagem: 'assets/imagens/672.png', descricao: 'assets/imagens/672_desc.png', abrirDescricao: false },
  ];
  restonic = [
  { id: 15, nome: '467', fabril:'Restonic', imagem: 'assets/imagens/467.png', descricao: 'assets/imagens/467_desc.png', abrirDescricao: false },
  ];

  mostrarOpcoes = {
    king: { ativo: false, setaParaBaixo: true },
    mercosul: { ativo: false, setaParaBaixo: true },
    restonic: { ativo: false, setaParaBaixo: true },
    ecoflex: { ativo: false, setaParaBaixo: true }
  };

  mostrarKing = false;
  mostrarSetaParaBaixo = true;
  mostrarMercosul = false;
  mostrarSetaParaBaixoMercosul = true;
  mostrarRestonic = false;
  mostrarSetaParaBaixoRestonic = true;
  mostrarEcoflex = false;
  mostrarSetaParaBaixoEcoflex = true
  

  colchaoAberto: number | null = null;

  toggleMostrar(opcao: string) {
    if (opcao === 'king') {
      this.mostrarOpcoes.king.ativo = !this.mostrarOpcoes.king.ativo;
      this.mostrarOpcoes.king.setaParaBaixo = !this.mostrarOpcoes.king.setaParaBaixo;
  
      // Fechar a opção Mercosul, se estiver aberta
      if (this.mostrarOpcoes.mercosul.ativo) {
        this.mostrarOpcoes.mercosul.ativo = false;
        this.mostrarOpcoes.mercosul.setaParaBaixo = true;
      }
      // Fechar a opção Restonic, se estiver aberta
      if (this.mostrarOpcoes.restonic.ativo) {
        this.mostrarOpcoes.restonic.ativo = false;
        this.mostrarOpcoes.restonic.setaParaBaixo = true;
      }
    } else if (opcao === 'mercosul') {
      this.mostrarOpcoes.mercosul.ativo = !this.mostrarOpcoes.mercosul.ativo;
      this.mostrarOpcoes.mercosul.setaParaBaixo = !this.mostrarOpcoes.mercosul.setaParaBaixo;
  
      // Fechar a opção King Koil, se estiver aberta
      if (this.mostrarOpcoes.king.ativo) {
        this.mostrarOpcoes.king.ativo = false;
        this.mostrarOpcoes.king.setaParaBaixo = true;
      }
      // Fechar a opção Restonic, se estiver aberta
      if (this.mostrarOpcoes.restonic.ativo) {
        this.mostrarOpcoes.restonic.ativo = false;
        this.mostrarOpcoes.restonic.setaParaBaixo = true;
      }
    } else if (opcao === 'restonic') {
      this.mostrarOpcoes.restonic.ativo = !this.mostrarOpcoes.restonic.ativo;
      this.mostrarOpcoes.restonic.setaParaBaixo = !this.mostrarOpcoes.restonic.setaParaBaixo;
  
      // Fechar a opção King Koil, se estiver aberta
      if (this.mostrarOpcoes.king.ativo) {
        this.mostrarOpcoes.king.ativo = false;
        this.mostrarOpcoes.king.setaParaBaixo = true;
      }
      // Fechar a opção Mercosul, se estiver aberta
      if (this.mostrarOpcoes.mercosul.ativo) {
        this.mostrarOpcoes.mercosul.ativo = false;
        this.mostrarOpcoes.mercosul.setaParaBaixo = true;
      }
    }
  }
  

  
  toggleDescricao(colchao: any) {
    if (colchao.abrirDescricao) {
      colchao.abrirDescricao = false;
      this.colchaoAberto = null;
    } else {
      if (this.colchaoAberto !== null) {
        this.king[this.colchaoAberto].abrirDescricao = false;
        this.mercosul[this.colchaoAberto].abrirDescricao = false;
      }
      colchao.abrirDescricao = true;
      this.colchaoAberto = colchao.id - 1;
     
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

