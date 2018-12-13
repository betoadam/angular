import { Component, OnInit } from "@angular/core";
import { KeywordService } from "src/app/keyword/keyword.service";
import { Keyword } from "src/app/keyword/keyword";
import { CategoriaService } from "src/app/categoria/categoria.service";
import { Categoria } from "src/app/categoria/categoria";
import { Document } from "../document";
import { DocumentService } from "../document.service";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  constructor(
    private keywordService: KeywordService,
    private categoriaService: CategoriaService,
    private documentService: DocumentService
  ) {}

  keywords: Keyword[];
  categories: Categoria[];

  document: Document = {
    id: null,
    description: null,
    date: null,
    lastUpdate: null,
    fileName: null,
    categoria: {
      id: null,
      name: null
    },
    keywords: null
  };

  ngOnInit() {
    this.getAllCategories();
    this.getAllKeywords();
  }

  mouseOver: boolean = false;

  public mousePassou() {
    this.mouseOver = !this.mouseOver;
  }

  public getAllKeywords() {
    this.keywordService
      .getAll()
      .subscribe(
        (data: Keyword[]) => (this.keywords = data),
        error => console.log(error),
        () => console.log(this.keywords)
      );
  }
  public getAllCategories() {
    this.categoriaService
      .getAll()
      .subscribe(
        (data: Categoria[]) => (this.categories = data),
        error => console.log(error),
        () => console.log(this.categories)
      );
  }
  public salvar(elemento) {
    console.log(elemento);
    this.document.date = null
    this.document.lastUpdate = null
    this.document.categoria = null
    this.document.keywords = null
    this.documentService.Save(this.document).subscribe(
      (res: Document) => this.document = res,
      (error) => console.log(error),
      () => console.log(this.document)
    );
  }
}
