import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PessoaModule } from "./pessoa/pessoa.module";
import { CategoriaModule } from "./categoria/categoria.module";
import { EnderecoModule } from "./endereco/endereco.module";
import { KeywordModule } from "./keyword/keyword.module";
import { DocumentModule } from "./document/document.module";
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { MenuComponent } from "./menu/menu.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { LoginModule } from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PessoaModule,
    CategoriaModule,
    EnderecoModule,
    KeywordModule,
    DocumentModule,
    DashboardModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
