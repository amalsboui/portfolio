import { Component, signal, type OnDestroy, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  displayed = signal('');
  private full = '4th Year ICT Engineering Student.';
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
}

