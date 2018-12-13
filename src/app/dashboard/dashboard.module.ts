import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { PessoaComponent } from "./pessoa/pessoa.component";
import { DocumentComponent } from "./document/document.component";
import { DocumentService } from "./document/document.service";
import { PessoaService } from "./pessoa/pessoa.service";
import { NewComponent } from "./document/new/new.component";
import { KeywordService } from "../keyword/keyword.service";
import { CategoriaService } from "../categoria/categoria.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DashboardComponent,
    PessoaComponent,
    DocumentComponent,
    NewComponent
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [DocumentService, PessoaService, KeywordService, CategoriaService]
})
export class DashboardModule {}
