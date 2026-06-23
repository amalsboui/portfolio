import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
 menuOpen = signal(false);
  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }

  links: NavLink[] = [
    { label: 'Home',     path: '/home' },
    { label: 'About',    path: '/about' },
    { label: 'Skills',   path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact',  path: '/contact' },
  ];
}
