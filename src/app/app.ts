import { Component } from '@angular/core';
import { PreviewComponent } from './components/preview-component/preview-component';
import { SettingsComponent } from './components/settings-component/settings-component';

@Component({
  selector: 'app-root',
  imports: [PreviewComponent, SettingsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
