import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { pessoaRoutes } from "./pessoa/pessoa.route";
import { categoriaRoutes } from "./categoria/categoria.route";
import { enderecoRoutes } from "./endereco/endereco.route";
import { keywordRoutes } from "./keyword/keyword.route";
import { documentRoutes } from "./document/document.route";
import { dashboardRoutes } from "./dashboard/dashboard.route";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  ...pessoaRoutes,
  ...categoriaRoutes,
  ...enderecoRoutes,
  ...keywordRoutes,
  ...documentRoutes,
  ...dashboardRoutes,
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
