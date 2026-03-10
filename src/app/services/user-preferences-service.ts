import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserPreferencesService {
  username = signal<string>("Ospite");
  temaScuro = signal<boolean>(false);

  setUsername(newUserName: string): void {
    this.username.set(newUserName);
  }

  toggleTema(): void {
    this.temaScuro.update(tema => !tema);
  }
}
