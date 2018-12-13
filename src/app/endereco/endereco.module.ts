import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnderecoService } from "./endereco.service";
import { EnderecoComponent } from "./endereco.component";


import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [EnderecoComponent], // componentes que fazem partes do modulo
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [EnderecoService] // serviços que fazem parte do modulo
})
export class EnderecoModule {}
