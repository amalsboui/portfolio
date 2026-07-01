import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { Translation } from '../../services/translation/translation';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  t = inject(Translation);


}
