import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentService } from "./document.service";
import { DocumentComponent } from "./document.component";
import { HttpClientModule } from "@angular/common/http";
import { NewComponent } from "./new/new.component";

@NgModule({
  declarations: [DocumentComponent, NewComponent], // componentes que fazem partes do modulo
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [DocumentService] // serviços que fazem parte do modulo
})
export class DocumentModule {}
