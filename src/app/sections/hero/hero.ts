import { Component, inject, signal, type OnDestroy, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Translation } from '../../services/translation';
import { TranslatePipe } from '../../pipes/translate-pipe';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  t = inject(Translation);
  displayed = signal('');
  private full = 'ICT Engineering Student.';
  private i = 0;
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.timer = setInterval(() => {
      if (this.i < this.full.length) {
        this.displayed.update(v => v + this.full[this.i++]);
      } else {
        clearInterval(this.timer!);
      }
    }, 65);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  scrollTo(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
}

