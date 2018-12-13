import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { NewComponent } from "./document/new/new.component";

export const dashboardRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "document/new", component: NewComponent }
];
