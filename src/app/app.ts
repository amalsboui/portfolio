import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Hero, About, Contact, Projects, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
