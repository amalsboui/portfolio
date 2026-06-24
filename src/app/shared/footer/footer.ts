import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';
import { TranslatePipe } from '../../pipes/translate-pipe';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  t = inject(Translation);


}
