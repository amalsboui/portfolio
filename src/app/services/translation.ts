import { Injectable, signal, effect } from '@angular/core';
import { translations, type TranslationKey } from './translations';

export type Language = 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class Translation {
  private currentLang = signal<Language>('en');
  readonly language = this.currentLang.asReadonly();

  constructor() {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'fr')) {
      this.currentLang.set(saved);
    }

    effect(() => {
      localStorage.setItem('language', this.currentLang());
    });
  }

  translate(key: string): string { 
    const translation = translations[key as TranslationKey];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[this.currentLang()];
  }

  toggleLanguage() {
    this.currentLang.update(lang => lang === 'en' ? 'fr' : 'en');
  }

  getCurrentLanguage(): Language {
    return this.currentLang();
  }
}