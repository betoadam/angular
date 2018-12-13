import { Component } from "@angular/core";
import { PessoaService } from "../pessoa.service";
import { Pessoa } from "../pessoa";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent {
  constructor(private pessoaService: PessoaService) {}

  mouseOver: boolean = false;

  public mousePassou() {
    this.mouseOver = !this.mouseOver;
  }

  pessoa: Pessoa = {
    id: null,
    nome: "",
    login: "",
    senha: "",
    endereco: null,
    documents: null
  };

  public salvar(elemento) {
    console.log(elemento);
    console.log(this.pessoa.nome);
    console.log(this.pessoa.login);
    console.log(this.pessoa.senha);
    this.pessoaService.Save(this.pessoa).subscribe(
      (res: Pessoa) => this.pessoa = res,
      (error) => console.log(error),
      () => console.log(this.pessoa)
    );;
  }
  public onKeyUp(event) {
    console.log(event);

    this.pessoa.nome = event.target.value;
  }
}
