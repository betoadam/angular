import { Component, OnInit } from "@angular/core";
import { DocumentService } from "./document.service";
import { Document } from "./document";

@Component({
  selector: "app-document",
  templateUrl: "./document.component.html",
  styleUrls: ["./document.component.css"]
})
export class DocumentComponent implements OnInit {
  constructor(private documentService: DocumentService) {}

  documents: Document[];

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.documentService
      .getAll()
      .subscribe(
        (data: Document[]) => (this.documents = data),
        error => console.log(error),
        () => console.log(this.documents)
      );
  }
}
