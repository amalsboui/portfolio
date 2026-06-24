import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';
import { TranslatePipe } from '../../pipes/translate-pipe';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  t = inject(Translation);


}
