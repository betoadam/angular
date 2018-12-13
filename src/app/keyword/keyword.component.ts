import { Component, OnInit } from "@angular/core";
import { KeywordService } from "./keyword.service";
import { Keyword } from "./keyword";

@Component({
  selector: "app-keyword",
  templateUrl: "./keyword.component.html"
})
export class KeywordComponent implements OnInit {
  constructor(private keywordService: KeywordService) {}

  keyword: Keyword[];

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.keywordService
      .getAll()
      .subscribe(
        (data: Keyword[]) => (this.keyword = data),
        error => console.log(error),
        () => console.log(this.keyword)
      );
  }
}
