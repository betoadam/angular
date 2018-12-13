import { Component, OnInit } from "@angular/core";
import { KeywordService } from "src/app/keyword/keyword.service";
import { Keyword } from "src/app/keyword/keyword";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  constructor(
    private keywordService: KeywordService
  ) {}

  keywords: Keyword[];

  keyword: Keyword = {
    id: null,
    name: null,
    documents: null
  };

  ngOnInit() {
  }

  mouseOver: boolean = false;

  public mousePassou() {
    this.mouseOver = !this.mouseOver;
  }
  public salvar(elemento) {
    console.log(elemento);
    this.keywordService.Save(this.keyword).subscribe(
      (res: Keyword) => this.keyword = res,
      (error) => console.log(error),
      () => console.log(this.keyword)
    );
  }
  

}
