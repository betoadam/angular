import { Routes } from "@angular/router";
import { PessoaComponent } from "./pessoa.component";
import { NewComponent } from "./new/new.component";

export const pessoaRoutes: Routes = [
  { path: "pessoa", component: PessoaComponent },
  { path: "register", component: NewComponent }
];
