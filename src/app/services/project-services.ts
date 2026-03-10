import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectServices {
  projects: Project[] = [
    {
      id: '1', 
      nome: "e-commerce", 
      descrizione: "Un e-commerce per angular"
    },
    {
      id: '2',
      nome: "lista della spesa",
      descrizione: "Un app in angular per la lista della spesa"
    },
    {
      id: '3',
      nome: "portfolio",
      descrizione: "app contenente uno showcase dei progretti personali"
    }
  ]
}

export type Project = {
  id: string,
  nome: string,
  descrizione: string
}