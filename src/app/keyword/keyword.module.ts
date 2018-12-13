import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeywordService } from "./keyword.service";
import { KeywordComponent } from "./keyword.component";

import { HttpClientModule } from "@angular/common/http";
import { NewComponent } from "./new/new.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [KeywordComponent,NewComponent], // componentes que fazem partes do modulo
  imports: [CommonModule, HttpClientModule,FormsModule],
  exports: [],
  providers: [KeywordService] // serviços que fazem parte do modulo
})
export class KeywordModule {}
