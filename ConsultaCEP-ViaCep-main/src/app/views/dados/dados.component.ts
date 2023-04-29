import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

    public nome: any;
    email: any;
    telefone: any;
    
    // propriedade que liga o html ao ts e vice-versa
  
    cadastrar() {
      console.log(this.nome)
      console.log(this.email)
      console.log(this.telefone)// valor inserido no input
    }
  

  constructor(private router: Router) {

   }

  ngOnInit(): void {
    this.forM = new FormGroup({
        nome: new FormControl(''),
        email: new FormControl(''),
        telefone: new FormControl(''),
        
    })
}

  forM!: FormGroup


  submit(){

      if(this.forM.invalid){
          return;
      }
      
      console.log(this.forM.value);
      this.router.navigate(['/formulario'])
      
  }


}
