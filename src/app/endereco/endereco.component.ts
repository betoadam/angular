import { Component, OnInit } from "@angular/core";
import { EnderecoService } from "./endereco.service";
import { Endereco } from "./endereco";

@Component({
  selector: "app-endereco",
  templateUrl: "./endereco.component.html"
})
export class EnderecoComponent implements OnInit {
  constructor(private enderecoService: EnderecoService) {}

  endereco: Endereco[];

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.enderecoService
      .getAll()
      .subscribe(
        (data: Endereco[]) => (this.endereco = data),
        error => console.log(error),
        () => console.log(this.endereco)
      );
  }
}
