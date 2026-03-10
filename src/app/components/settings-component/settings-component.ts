import { Component, inject } from '@angular/core';
import { UserPreferencesService } from '../../services/user-preferences-service';

@Component({
  selector: 'app-settings-component',
  imports: [],
  templateUrl: './settings-component.html',
  styleUrl: './settings-component.css',
})
export class SettingsComponent {
  settings = inject(UserPreferencesService);
}
