import { Component, OnInit } from "@angular/core";
import { CategoriaService } from "./categoria.service";
import { Categoria } from "./categoria";

@Component({
  selector: "app-categoria",
  templateUrl: "./categoria.component.html"
})
export class CategoriaComponent implements OnInit {
  constructor(private categoriaService: CategoriaService) {}

  categories: Categoria[];

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.categoriaService
      .getAll()
      .subscribe(
        (data: Categoria[]) => (this.categories = data),
        error => console.log(error),
        () => console.log(this.categories)
      );
  }
}
