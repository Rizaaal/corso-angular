import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects-component/projects-component';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "projects/:id", component: ProjectsComponent },
  { path: "**", redirectTo: "home" }
];
