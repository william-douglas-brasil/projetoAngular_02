import { Component, OnInit } from '@angular/core';
//formgroup - define o formulario, 
//formcontrol - cria cada campo do formulario 
//validators - regra de validaçao dos campos
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { EmpresasService } from '../services/empresas.service';

@Component({
  selector: 'app-cadastro-empresas',
  templateUrl: './cadastro-empresas.component.html',
  styleUrls: ['./cadastro-empresas.component.css']
})
export class CadastroEmpresasComponent implements OnInit {

  //atributos
  mensagem_sucesso: string = "";
  mensagem_erro: string = "";

  constructor(private empresasService: EmpresasService //Injeção de dependencia
  ) { }

  //definindo o formulario
  formCadastro = new FormGroup({

    nomeFantasia: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(150)
    ]),

    razaoSocial: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(150)
    ]),

    cnpj: new FormControl('', [
      Validators.required,
      Validators.minLength(14),
      Validators.maxLength(20)
    ]),

  });

  //função utilizada para exibir as mensagens de erro de validação na página
  get form(): any {
    return this.formCadastro.controls;
  }

  ngOnInit(): void {
  }

  //funçao executada ao clicarmos no botao ENTRAR(SUBMIT) do formulario
  onSubmit(): void {

    //limpar as mensagens
    this.mensagem_sucesso = "";
    this.mensagem_erro = "";

    //fazendo uma chamada POST para uma API..
    this.empresasService.post(this.formCadastro.value)
      .subscribe(//captura a resposta da API
        (data: any) => {//resposta de sucesso API

          //exibir a mensagem de sucesso da página
          this.mensagem_sucesso = data.mensagem;

          //limpar os campos do formulário
          this.formCadastro.reset();
        },

        (e: any) => {//resposta de erro da API

          //exibir mensagem de erro
          this.mensagem_erro = e.error.mensagem;
        }
      )
  }

}
