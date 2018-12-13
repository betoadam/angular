import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoriaService } from "./categoria.service";
import { CategoriaComponent } from "./categoria.component";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [CategoriaComponent], // componentes que fazem partes do modulo
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [CategoriaService] // serviços que fazem parte do modulo
})
export class CategoriaModule {}
