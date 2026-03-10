import { Component, computed, inject, input } from '@angular/core';
import { Project, ProjectServices } from '../../services/project-services';
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-projects-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.css',
})
export class ProjectsComponent {
  id = input.required<string>();
  private projectsData = inject(ProjectServices);

  public get projects(): Project[] {
    return this.projectsData.projects
  }
  
  selectedProject = computed(() => 
    this.projects.find(p => p.id === this.id())
  );
}
