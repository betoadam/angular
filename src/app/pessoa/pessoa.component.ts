import { Component, OnInit } from "@angular/core";
import { PessoaService } from "./pessoa.service";
import { Pessoa } from "./pessoa";

@Component({
  selector: "app-pessoa",
  templateUrl: "./pessoa.component.html"
})
export class PessoaComponent implements OnInit {
  constructor(private pessoaService: PessoaService) {}

  pessoas: Pessoa[];

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.pessoaService
      .getAll()
      .subscribe(
        (data: Pessoa[]) => (this.pessoas = data),
        error => console.log(error),
        () => console.log(this.pessoas)
      );
  }
}
