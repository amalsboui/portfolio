import { Injectable, signal, effect } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = signal<ThemeMode>('dark');
  readonly theme = this.currentTheme.asReadonly();

  constructor() {
    // Load saved theme from localStorage
    const saved = localStorage.getItem('theme') as ThemeMode;
    if (saved && (saved === 'dark' || saved === 'light')) {
      this.currentTheme.set(saved);
      this.applyTheme(saved);
    }

    // Save theme when it changes
    effect(() => {
      const theme = this.currentTheme();
      localStorage.setItem('theme', theme);
      this.applyTheme(theme);
    });
  }

  private applyTheme(theme: ThemeMode) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  toggleTheme() {
    this.currentTheme.update(theme => theme === 'dark' ? 'light' : 'dark');
  }

  getCurrentTheme(): ThemeMode {
    return this.currentTheme();
  }

  isDark(): boolean {
    return this.currentTheme() === 'dark';
  }
}