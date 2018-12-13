import { Routes } from "@angular/router";
import { KeywordComponent } from "./keyword.component";
import { NewComponent } from "./new/new.component";

export const keywordRoutes: Routes = [
  { path: "keyword", component: KeywordComponent },
  { path: "keyword/new", component: NewComponent }
];
