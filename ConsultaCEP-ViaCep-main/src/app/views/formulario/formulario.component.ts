import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaService } from 'src/app/servico/consulta.service';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
    cep: any;
    logradouro: any;
    localidade: any;
    bairro: any;
    uf: any;
    ddd: any;

    //@Input() nome: string = '';
    //@Input() email: string = '';
    //@Input() telefone: string = '';

    constructor(private service: ConsultaService, private router: Router) {}
    
    ngOnInit(): void {
    }
    forM!: FormGroup

    submit(){
        this.router.navigate(['/home'])
    }

    buscaCEP() {
        this.service.getCEP(this.cep).subscribe((data) => {
            this.cep = data.cep;
            this.logradouro = data.logradouro;
            this.localidade = data.localidade;
            this.bairro = data.bairro;
            this.uf = data.uf;
        });
    }
    blur(event: any) {
        this.buscaCEP();

        console.log(this.buscaCEP);
    }
}
