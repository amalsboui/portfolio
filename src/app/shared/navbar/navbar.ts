import { Component, inject, signal } from '@angular/core';
import { TranslationKey } from '../../services/translation/translations';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { Translation } from '../../services/translation/translation';
import { ThemeService } from '../../services/theme/theme';

interface NavLink {
  label: string;
  target: string;
  key: TranslationKey;
}

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  menuOpen = signal(false);
  theme = inject(ThemeService);

  t = inject(Translation);

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }

  links: NavLink[] = [
    { label: 'About', target: 'about', key: 'nav.about' },
    { label: 'Experience', target: 'experience', key: 'nav.experience' },
    { label: 'Education', target: 'education', key: 'nav.education' },
    { label: 'Certifications', target: 'certifications', key: 'nav.certifications' },
    { label: 'Skills', target: 'skills', key: 'nav.skills' },
    { label: 'Projects', target: 'projects', key: 'nav.projects' },
    { label: 'Associations', target: 'associations', key: 'nav.associations' },
    { label: 'Contact', target: 'contact', key: 'nav.contact' },
  ];

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMenu(); 
  }

toggleLanguage() {
  this.t.toggleLanguage();
}

toggleTheme() {
    this.theme.toggleTheme();
  }
}