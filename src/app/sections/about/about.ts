import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { Translation } from '../../services/translation/translation';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  t = inject(Translation);


}
