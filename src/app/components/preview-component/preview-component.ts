import { Component, inject } from '@angular/core';
import { UserPreferencesService } from '../../services/user-preferences-service';

@Component({
  selector: 'app-preview-component',
  imports: [],
  templateUrl: './preview-component.html',
  styleUrl: './preview-component.css',
})
export class PreviewComponent {
  settings = inject(UserPreferencesService);
}
