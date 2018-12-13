import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PessoaService } from "./pessoa.service";
import { PessoaComponent } from "./pessoa.component";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { NewComponent } from "./new/new.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [PessoaComponent, NewComponent], // componentes que fazem partes do modulo
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  exports: [],
  providers: [PessoaService] // serviços que fazem parte do modulo
})
export class PessoaModule {}
